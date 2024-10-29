import { ID } from 'appwrite';

import { INewUser } from "@/types";
import { account } from './config';

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        )
        return newAccount
        
    } catch (error) {
        console.log(error);
    }
}

export async function loginUser(email: string, password: string) {
    try {
        const session = await account.createEmailSession(email, password);
        return session; // This will return the user session
    } catch (error) {
        console.error("Login failed:", error);
    }
}