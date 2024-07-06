// Create mini Express server
const exp = require('express');
const userApp = exp.Router();

// Test Data
const usersList = [
    { id: 1, name: 'vvsv' },
    { id: 2, name: 'pavan' }
];

// Create request handler 
//create sample rest api(req handlers)

// GET Request
userApp.get('/users', (req, res) => {
    res.send({ message: 'All Users', payload: usersList });
});
// Send 1 user by id
userApp.get('/users/:id', (req, res) => {
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
userApp.use(exp.json());

// POST request to create a new user
userApp.post('/users', (req, res) => {
    let newUser = req.body;
    usersList.push(newUser);
    res.send({ message: 'New User Created', payload: newUser });
});

//  PUT Request to update user by id
userApp.put('/users', (req, res) => {
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
userApp.delete('/users/:id', (req, res) => {
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


// Export userApp
module.exports = userApp;