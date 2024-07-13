// Create mini Express server
const exp = require('express');
const userApp = exp.Router();

// Import bcrypt
const bcrypt = require('bcrypt');

// Import JWT Token
let jwt = require('jsonwebtoken');


//  add body parser
userApp.use(exp.json());


// Create request handler 
// GET Request
userApp.get('/users', async (req, res) => {

    // Get usersCollection object
    const usersCollection = req.app.get('usersCollection');

    // Get Users data from usersCollection of DB
    let users = await usersCollection.find().toArray();

    // Send the data to the client
    res.send({ message: "All Users", payload: users });

});
// Send 1 user by username
userApp.get('/users/:username', async (req, res) => {
    // Get usersCollection object
    const usersCollection = req.app.get('usersCollection');

    // Get username from URL
    let usernameURL = req.params.username;

    let user = await usersCollection.findOne({ username: { $eq: usernameURL } });

    // Send the data to the client
    res.send({ message: "One User", payload: user });

});


// POST request to create a new user
userApp.post('/users', async (req, res) => {
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
});

//  PUT Request to update user by username
userApp.put('/users:username', (req, res) => {


});

// DELETE Request to delete user by id
userApp.delete('/users/:username', async (req, res) => {

    // Get usersCollection object
    const usersCollection = req.app.get('usersCollection');

    // Get username from URL
    let usernameURL = req.params.username;

    // Delete the user
    let result = await usersCollection.deleteOne({ username: { $eq: usernameURL } });

    // Send response to the client
    res.send({ message: "User Deleted", payload: result });

});


// User Login
userApp.post('/users/login', async (req, res) => {

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
            let token = jwt.sign({ username: user.username }, 'abcdef',{expiresIn: 20});

            // Send the token to the client
            res.send({ message: "Login Success", token: token,user:user });

        }
    }

});


// Export userApp
module.exports = userApp;