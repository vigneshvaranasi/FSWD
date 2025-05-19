import { getClient } from "./utils.js";

async function deleteTodo(todoId){
    const client = await getClient();
    const deleteTodoQuery  = `
        DELETE from todos
        WHERE id = $1
    `
    const res = await client.query(deleteTodoQuery,[todoId])
    console.log(`Todo with ID ${todoId} deleted successfully`);
}

deleteTodo(1)