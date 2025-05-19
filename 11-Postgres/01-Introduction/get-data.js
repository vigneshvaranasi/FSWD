import { getClient } from "./utils.js";

async function getUsers(){
    const client = await getClient();
    const getUsersQuery = `SELECT * FROM users`
    const res = await client.query(getUsersQuery)
    console.log("All Users: ");
    for (let user of res.rows){
        console.log(`User ID: ${user.id}, Email: ${user.email}`);
    }
}

async function getUsersFromEmail(email){
    const client  = await getClient();
    const getUserQuery = `SELECT * from users WHERE email = $1`
    const res = await client.query(getUserQuery,[email])
    console.log("User Details: ");
    console.log(`User ID: ${res.rows[0].id}, Email: ${res.rows[0].email}`);
}

async function getUserTodos(id){
    const client = await getClient();
    const getUserTodosQuery = `SELECT * from todos WHERE user_id = $1`;
    const res = await client.query(getUserTodosQuery,[id])
    console.log("User Todos: ");
    for (let todo of res.rows){
        console.log(`Todo ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}`);
    }
}


getUsers()
getUsersFromEmail('varanasivsv@gmail.com')
getUserTodos(1)