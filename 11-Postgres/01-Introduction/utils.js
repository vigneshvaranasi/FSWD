import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DB_URL } = process.env;

export async function getClient() {
    const client = new Client(DB_URL);
    await client.connect();
    return client;
}
