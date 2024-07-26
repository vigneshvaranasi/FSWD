//  Create HTTP Server

// Import dotenv
require('dotenv').config();


// Import Express Module
const exp = require('express');
const app = exp();

// CORS
const cors = require('cors');
app.use(cors({
    // origin: '*'
    origin:'http://localhost:8888'
}));    

// Import Mongo Client
const {MongoClient} = require('mongodb');

// Database URL
const dbURL = process.env.DB_URL; // Use environment variable
// const dbURL = 'mongodb://127.0.0.1:27017';

// Create MongoDB Client
const mc = new MongoClient(dbURL);

// Connect to MongoDB
mc.connect().then(connectionObject => {
    
    // Connect to Database
    const companyDatabase = connectionObject.db('Company');
    
    // Connect to Collection
    const usersCollection = companyDatabase.collection('Users');
    const productsCollection = companyDatabase.collection('Products');
    const cartCollection = companyDatabase.collection('Cart');
    
    // Share the Collection with the APIs
    app.set('productsCollection', productsCollection);
    app.set('usersCollection', usersCollection);
    app.set('cartCollection', cartCollection);
    
    console.log('Connected to MongoDB');
    
    // Assign Port Number to Server
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Server running on port http://localhost:${port}`);
    });
}).catch(err => {
    console.log('Error in connecting to MongoDB');
});

app.get('/', (req, res) => {
    res.send('This is an API Connected to MongoDB');
});

// Import User API
const userAPI = require('./APIs/userAPI');
// If path starts with /user-api, then userAPI will be called
app.use('/user-api', userAPI);

// Import Products API
const productsAPI = require('./APIs/productsAPI');
// If path starts with /products-api, then productsAPI will be called
app.use('/products-api', productsAPI);


// Handling Invalid Paths
app.use('*',(req,res,next) => {
    res.send({message: `Path ${req.baseUrl} is invalid`});
});

// Error Handling Middleware
app.use((err,req,res,next) => {
    res.send({message: 'Error Occurred', error: err.message});
});




