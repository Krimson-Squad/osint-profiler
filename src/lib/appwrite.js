import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('670c108e0028ae3f4cf3'); // Replace with your project ID

export const account = new Account(client);
export const project_id = "670c108e0028ae3f4cf3";
export const database_id = "10927224";
export const collection_id = "670c12390011df38ec18"
export { ID } from 'appwrite';
