import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthServices {
  account;
  client = new Client();

  constructor() {
    this.client.setEndpoint(conf.apwriteUrl).setProject(conf.apwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite getCurrentUser ", error);
    }

    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

export const authServices = new AuthServices();
