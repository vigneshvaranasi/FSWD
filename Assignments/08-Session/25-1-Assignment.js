let data;
let tableBody = document.querySelector('tbody');
let gridContainer = document.querySelector('.container');

async function gettodo() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        data = await res.json();
        displayTodos();
        console.log('data: ', data);
    } 
    catch(error) {
        console.log('error: ', error);
    }
}

function displayTodos() {
    data.forEach((todo) => {
        console.log('todo: ', todo);
        
        let tr = document.createElement('tr');
        
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        
        td1.textContent = todo.userId;
        td2.textContent = todo.id;
        td3.textContent = todo.title;
        td4.textContent = todo.completed;
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        
        tableBody.appendChild(tr);

        let div = document.createElement('div');
        let d1 = document.createElement('p');
        let d2 = document.createElement('p');
        let d3 = document.createElement('p');
        let d4 = document.createElement('p');

        d1.textContent = `User ID: ${todo.userId}`;
        d2.textContent = `ID: ${todo.id}`;
        d3.textContent = `Title: ${todo.title}`;
        d4.textContent = `Completed: ${todo.completed}`;

        d4.style.color = todo.completed ? 'green' : 'red';
        
        div.appendChild(d1);
        div.appendChild(d2);
        div.appendChild(d3);
        div.appendChild(d4);


        gridContainer.appendChild(div);


    });
}

gettodo();
