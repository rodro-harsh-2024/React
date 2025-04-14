const config = {
    appwriteUrl : String(import.meta.resolve.env.VITE_APPWRITE_URL),
    appWriteProjectId : String(import.meta.resolve.env.VITE_APPWRITE_PROJECT_ID),
    appWriteBucketId : String(import.meta.resolve.env.VITE_APPWRITE_BUCKET),
    appWriteCollectionId : String(import.meta.resolve.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteDatabaseId : String(import.meta.resolve.env.VITE_APPWRITE_DATABASE_ID),
}

export default config;