import { getClient } from "./utils.js";

async function updateTodo(todoId){
    const client = await getClient();
    const updateTodoQuery = `
        UPDATE todos
        set done = $1
        WHERE id = $2
    `
    const todoDetails = [true,todoId]
    const res = await client.query(updateTodoQuery,todoDetails)
    console.log(`Todo with ID ${todoId} updated successfully`);
}

updateTodo(1)