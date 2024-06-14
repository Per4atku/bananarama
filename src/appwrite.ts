import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("666c54be000b85b8ccfe");

export const account = new Account(client);
export { ID } from "appwrite";
