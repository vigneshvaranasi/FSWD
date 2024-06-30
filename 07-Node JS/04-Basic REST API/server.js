//  Create HTTP Server

// Import Express Module
const exp = require('express');
const app = exp();


// Test Data
const usersList = [
    { id: 1, name: 'vvsv' },
    { id: 2, name: 'pavan' }
];

// Create request handler 
//create sample rest api(req handlers)

// GET Request
app.get('/users', (req, res) => {
    res.send({ message: 'All Users', payload: usersList });
});
// Send 1 user by id
app.get('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    //  Search user by id in usersList array 
    let userById = usersList.find(user => user.id == userId);
    if (userById === undefined) {
        res.send({ message: 'User not found' });
    }
    else {
        res.send({ message: 'User by Id', payload: userById });
    }
});


//  add body parser
app.use(exp.json());

// POST request to create a new user
app.post('/users', (req, res) => {
    let newUser = req.body;
    usersList.push(newUser);
    res.send({ message: 'New User Created', payload: newUser });
});

//  PUT Request to update user by id
app.put('/users', (req, res) => {
    let updatedUser = req.body;
    let index = usersList.findIndex(user => user.id == updatedUser.id);
    if (index === -1) {
        res.send({ message: 'User not found' });
    }
    else {
        usersList[index] = updatedUser;
        res.send({ message: 'User Updated', payload: updatedUser });
    }
});

// DELETE Request to delete user by id
app.delete('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    let index = usersList.findIndex(user => user.id == userId);
    if (index === -1) {
        res.send({ message: 'User not found' });
    }
    else {
        let deletedUser = usersList.splice(index, 1);
        res.send({ message: 'User Deleted', payload: deletedUser });
    }
});




// Assign Port Number to Server
const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});


