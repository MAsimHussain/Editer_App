import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Services {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.apwriteUrl).setProject(conf.apwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, status, userId, featuredImage }) {
    try {
      return await this.databases.createDocument(
        conf.apwriteDataBaseId,
        conf.apwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Error CreatePost:: ", error);
    }
  }
  async updatePost(slug, { title, content, status, featuredImage }) {
    try {
      return await this.databases.updateDocument(
        conf.apwriteDataBaseId,
        conf.apwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImage,
        }
      );
    } catch (error) {
      console.log("Error updatePost:: ", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.apwriteDataBaseId,
        conf.apwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("deletePost : ", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.apwriteDataBaseId,
        conf.apwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Get One Post: ", error);
      return false;
    }
  }
  async getPosts(Queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.apwriteDataBaseId,
        conf.apwriteCollectionId,
        Queries
      );
    } catch (error) {
      console.log("GetAll Post : ", error);
      return false;
    }
  }

  // upload Files Services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.apwriteDataBaseId,
        conf.apwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("upload File : ", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteDocument(
        conf.apwriteDataBaseId,

        fileId
      );
      return true;
    } catch (error) {
      console.log("deleteFile : ", error);
    }
  }

  async filePreview(fileId) {
    try {
      return await this.bucket.getFilePreview(conf.apwriteDataBaseId, fileId);
    } catch (error) {
      console.log("filePreview: ", error);
    }
  }
}

export const services = new Services();
