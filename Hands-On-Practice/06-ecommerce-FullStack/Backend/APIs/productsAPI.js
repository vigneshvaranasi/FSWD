// Import Express Module and create a Router instance
const express = require('express');
const productsApp = express.Router();

const expressAsyncHandler = require('express-async-handler');


// GET Request - Get all products
productsApp.get('/', expressAsyncHandler(async (req, res) => {

    // Get productCollection object
    const productCollection = req.app.get('productsCollection');
    
    // get Products data from the Products Collection
    let productsList = await productCollection.find().toArray();

    // Sort the products by ID in descending order
    productsList.sort((a, b) => b.id- a.id);
    // Send the data to the client
    res.send({ message: "All Products", payload: productsList });
    
}));

// GET Request by ID - Get a specific product
productsApp.get('/:id', expressAsyncHandler(async (req, res) => {
    
    // Get productCollection object
    const productCollection = req.app.get('productsCollection');

    // Get id from URL
    let idFromURL = Number(req.params.id);

    let productFromID = await productCollection.findOne({id:{$eq:idFromURL}})

    // Send data to the Client
    res.send({message:"Single Prouct",payload:productFromID})

}));


// Export the module
module.exports = productsApp;
