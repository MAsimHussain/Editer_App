const conf = {
  apwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  apwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  apwriteDataBaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  apwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  apwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
