// Create mini Express server
const exp = require('express');
const userApp = exp.Router();

require('dotenv').config();


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

// PUT Request to update user by username (Protected Route)
userApp.put('/users', tokenVerify, expressAsyncHandler(async (req, res) => {

    // Get usersCollection object
    const usersCollection = req.app.get('usersCollection');

    // Get data from client
    let updatedUser = req.body;
    const { oldUsername, ...updateData } = updatedUser;
    console.log('updatedUser: ', updateData);

    // Update the user
    let result = await usersCollection.updateOne({ username: oldUsername }, { $set: updateData });

    let user = await usersCollection.findOne({ username: updateData.username });

    // Send response to the client
    res.send({ message: "User Updated", payload: result, updatedUser: user });
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
            let token = jwt.sign({ username: user.username }, process.env.SECRET, { expiresIn: '1h' });

            // Send the token to the client
            res.send({ message: "Login Success", token: token, user: user });

        }
    }

}));

// Add selected product to the specific user
userApp.put('/add-to-cart/:username', expressAsyncHandler(async (req, res) => {

    // Get Collection objects
    const cartCollection = req.app.get('cartCollection');
    const usersCollection = req.app.get('usersCollection');
    const proCollection = req.app.get('productsCollection');


    // get username form URL
    let usernameFromURL = req.params.username;

    // Get product from client
    let productBody = req.body;

    const productID = Number(productBody.product.id);

    // Get product from productsCollection
    let product = await proCollection.findOne({ id: { $eq: productID } });

    // push the product to the cart
    let result = await cartCollection.updateOne({ username: { $eq: usernameFromURL } }, { $push: { products: product } }, { upsert: true });

    // push the product to the cart in user collection
    let result1 = await usersCollection.updateOne({ username: { $eq: usernameFromURL } }, { $push: { cart: product } });

    // Send response to the client
    res.send({ message: "Product Added to Cart", payload: result });

}));

// Delete selected product from the specific user cart, Remove one product from the cart
const { ObjectId } = require('mongodb');

// Delete selected product from the specific user cart, Remove one product from the cart
// Delete selected product from the specific user cart, Remove one product from the cart
userApp.put('/delete-from-cart/:username', expressAsyncHandler(async (req, res) => {

    // Get Collection objects
    const cartCollection = req.app.get('cartCollection');
    const usersCollection = req.app.get('usersCollection');

    // Get username from URL
    let usernameFromURL = req.params.username;

    // Get product from client
    let productBody = req.body;

    // Get product id
    let productID = productBody.product.id;

    // Delete the product from the cart
    let result = await cartCollection.updateOne(
        { username: { $eq: usernameFromURL } },
        { $pull: { products: { id: productID } } }
    );

    // Delete the product from the cart in user collection
    let result1 = await usersCollection.updateOne(
        { username: { $eq: usernameFromURL } },
        { $pull: { cart: { id: productID } } }
    );

    // Send response to the client
    if (result.modifiedCount === 0 || result1.modifiedCount === 0) {
        res.status(404).send({ message: 'Product not found in cart' });
    } else {
        res.send({ message: 'Product Deleted from Cart', payload: result });
    }
}));





// Export userApp
module.exports = userApp;