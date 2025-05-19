import { getClient } from "./utils.js";

async function insertData(){
    const client = await getClient();
    const insertUSerQuery = `
        INSERT into users (email,password) 
        values ($1,$2) 
        returning id
    ` 
    const userDetails = ['varanasivsv@gmail.com','12345678'];
    const res = await client.query(insertUSerQuery,userDetails)
    // console.log('res: ', res);

    const insertTodoQuery =  `
        INSERT into todos (title,description,user_id)
        values ($1,$2,$3)
        returning id
    `
    const todoDetails = ['Todo 1','Todo 1 description',res.rows[0].id]
    const todoRes = await client.query(insertTodoQuery,todoDetails)
    // console.log('todoRes: ', todoRes);
}

insertData()