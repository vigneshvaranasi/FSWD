//  Create HTTP Server

// Import Express Module
const exp = require('express');
const app = exp();

// Import Mongo Client
const {MongoClient} = require('mongodb');

// Database URL
// const dbURL = 'mongodb+srv://myAtlasDBUser:TCMpdwMfoi62hj22@myatlasclusteredu.gf87o4p.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU';
const dbURL = 'mongodb://127.0.0.1:27017';

// Create MongoDB Client
const mc = new MongoClient(dbURL);

// Connect to MongoDB
mc.connect().then(connectionObject => {
    
    // Connect to Database
    const usersDatabase = connectionObject.db('Company');
    
    // Connect to Collection
    const usersCollection = usersDatabase.collection('Users');
    
    // Share the Collection with the APIs
    app.set('usersCollection', usersCollection);
    
    console.log('Connected to MongoDB');
    
    // Assign Port Number to Server
    const port = 4000;
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




