import config from '../config/config.js'
import { Client, ID ,Databases,Storage,Query} from "appwrite";


export class Service{

    client  = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug,{title,content,featuredImage,status,userId});
        } catch (error) {
            console.log('Appwrite Service :: create post',error);
            
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug,{title,content,featuredImage,status});
        } catch (error) {
            console.log('Appwrite Service :: updatepost',error);
            
        }
    }

    async deletePOst(slug){
        try {
            await this.databases.deleteDocument(config.appWriteDatabaseId,config.appWriteCollectionId,slug);
            return true;
        } catch (error) {
            console.log('Appwrite Service :: deletepost',error);
            return false;            
        }
    }

    async getDocumentById(){
            try {
                return await this.databases.getDocument(
                    config.appWriteDatabaseId,config.appWriteCollectionId,slug
                )
            } catch (error) {
                console.log('Appwrite Service :: get doc by id',error);
                
            }
    }

    async getPosts(queries = [Query.equal('status','active')]){
        try {
            return await this.databases.listDocuments(config.appWriteDatabaseId,config.appWriteDatabaseId,queries)
        } catch (error) {
            console.log('Appwrite Service ::  get all',error);
            return false;
        }
    }

    // Upload filee
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appWriteBucketId,ID.unique(),file);
            
        } catch (error) {
            console.log('Appwrite Service :: upload file',error
            );
            return false;
            
        }


    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(config.appWriteBucketId,fileId);
            return true;
        } catch (error) {
            console.log('Appwrite Service :: delete file',error);
            return false;
        }
    }
    

    getFilePreview(fileId){
        return this.bucket.getFilePreview(config.appWriteBucketId,fileId);
    }

}


const service = new Service()
export default service;