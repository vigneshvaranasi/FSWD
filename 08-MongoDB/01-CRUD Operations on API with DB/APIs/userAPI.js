// Create mini Express server
const exp = require('express');
const userApp = exp.Router();

// Import bcrypt
const bcrypt = require('bcrypt');

// Import JWT Token
let jwt = require('jsonwebtoken');

const tokenVerify = require('../middlewares/tokenVerify');

const expressAsyncHandler = require('express-async-handler');

//  add body parser
userApp.use(exp.json());


// Create request handler 
// GET Request to get all users (Protected Route)
userApp.get('/users', tokenVerify, expressAsyncHandler(async (req, res) => {

    // Get usersCollection object
    const usersCollection = req.app.get('usersCollection');

    // Get Users data from usersCollection of DB
    let users = await usersCollection.find().toArray();

    // Send the data to the client
    res.send({ message: "All Users", payload: users });

}));
// Send 1 user by username (protected Route)
userApp.get('/users/:username', tokenVerify, expressAsyncHandler(async (req, res) => {
    // Get usersCollection object
    const usersCollection = req.app.get('usersCollection');

    // Get username from URL
    let usernameURL = req.params.username;

    let user = await usersCollection.findOne({ username: { $eq: usernameURL } });

    // Send the data to the client
    res.send({ message: "One User", payload: user });

}));


// POST request to create a new user (Public Route)
userApp.post('/users', expressAsyncHandler(async (req, res) => {
    // Get usersCollection object
    const usersCollection = req.app.get('usersCollection');

    // Get data from client
    let newUser = req.body;

    // Verify the Duplciate User 
    let existingUser = await usersCollection.findOne({ username: { $eq: newUser.username } });

    if (existingUser !== null) {
        res.send({ message: "User Already Exists" });
        return;
    }
    // If user is not present, then create a new user
    else {
        // Hash the password
        let hashedPassword = await bcrypt.hash(newUser.password, 9);

        // Replace the password with hashed password
        newUser.password = hashedPassword;

        // Save the user
        await usersCollection.insertOne(newUser);

        // Send response to the client
        res.send({ message: "User Created", payload: newUser });
    }
}));

//  PUT Request to update user by username (Protected Route)
userApp.put('/users', tokenVerify, expressAsyncHandler(async (req, res) => {

    // Get usersCollection object
    const usersCollection = req.app.get('usersCollection');

    // Get data from client
    let updatedUser = req.body;

    // Update the user
    let result = await usersCollection.updateOne({ username: { $eq: updatedUser.username } }, { $set: updatedUser });

    // Send response to the client
    res.send({ message: "User Updated", payload: result });
}));

// DELETE Request to delete user by id (Protected Route)
userApp.delete('/users', tokenVerify, expressAsyncHandler(async (req, res) => {

    // Get usersCollection object
    const usersCollection = req.app.get('usersCollection');

    // Get data from client
    let user = req.body;

    // Delete the user
    let result = await usersCollection.deleteOne({ username: { $eq: user.username } });

    // Send response to the client
    res.send({ message: "User Deleted", payload: result });
}));


// User Login (Public Route)
userApp.post('/users/login', expressAsyncHandler(async (req, res) => {

    // Get usersCollection object
    const usersCollection = req.app.get('usersCollection');

    // Get data from client
    let userInfo = req.body;

    // Verify the user
    let user = await usersCollection.findOne({ username: { $eq: userInfo.username } });

    // If user is not present
    if (user === null) {
        res.send({ message: "Invalid Username" });
        return;
    }
    else {
        // Verify the password
        let isPasswordCorrect = await bcrypt.compare(userInfo.password, user.password);

        // If password is incorrect
        if (isPasswordCorrect === false) {
            res.send({ message: "Invalid Password" });
            return;
        }
        else {
            // Create JWT Token
            let token = jwt.sign({ username: user.username }, 'abcdef', { expiresIn: '1h' });

            // Send the token to the client
            res.send({ message: "Login Success", token: token, user: user });

        }
    }

}));


// Export userApp
module.exports = userApp;