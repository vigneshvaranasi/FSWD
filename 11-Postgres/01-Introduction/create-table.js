import { getClient } from "./utils.js";

async function createTable(){
    const client = await getClient();
    const createUserTableQuery  = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;
    await client.query(createUserTableQuery)
    
    const createTodoTableQuery = `
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        );
    `
    await client.query(createTodoTableQuery)
    console.log("Tables created successfully");
}

createTable()