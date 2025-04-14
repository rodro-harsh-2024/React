import config from '../config/config.js'
import { Client, Account, ID } from "appwrite";



export class AuthService{

    client = new Client();
    account;

    constructor(){

        this.client.setEndpoint(config.appwriteUrl).setProject(config.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
           const userAccount = await this.account.create(ID.unique(),email,password,name); 
            if(userAccount){
                // call another method
                return this.login(
                    email,password
                );
            }else{
                return 
            }
        } catch (error) {
            throw error;
        }
    };

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log('Appwrite service :: login',error);
            
            throw(error);
        }
       
    }

    async getCurrentUser(){
        try {
            await this.account.getCurrentUse()
        } catch (error) {
            console.log('Appwrite Service :: get user ',error);
            
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(`Appwrite service :: logout  :: ${error}`);
            
        }
    }



}
const authService = new AuthService();

export default authService;