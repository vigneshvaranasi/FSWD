// Import Express Module
const exp = require('express');
const app = exp();

// Import Mongo Client
const {MongoClient} = require('mongodb');

// Database URL
const dbURL = 'mongodb://127.0.0.1:27017';

// Create MongoDB Client
const mc = new MongoClient(dbURL);

let insertOneData = {
    name: 'Dev Duo',
    age: 19,
    languages: ['C++', 'JavaScript', 'Java'],
    address:{
        city: 'Vijayawada',
        state: 'Andhra Pardesh'
    }
};

let insertManyData = [
    {
        name: 'Vignesh',
        age: 20,
        languages: ['C', 'ReactJS', 'Java'],
        address:{
            city: 'Mumbai',
            state: 'Maharashtra'
        }
    },
    {
        name: 'Pavan CH',
        age: 21,
        languages: ['C#', 'GO', 'Python'],
        address:{
            city: 'Bangalore',
            state: 'Karnataka'
        }
    }
];

let updateOneData = {
    name: 'Dev Duo',
    $set: {
        age: 25
    }
};

// Connect to MongoDB
mc.connect().then(connectionObject => {
    
    // Connect to Database
    const usersDatabase = connectionObject.db('CRUD');
    
    // Connect to Collection
    const usersCollection = usersDatabase.collection('Users');
    
    // Share the Collection with the APIs
    app.set('usersCollection', usersCollection);
    
    console.log(`Connected to MongoDB Database: ${usersDatabase.databaseName} and Collection: ${usersCollection.collectionName} 🌍`);

    // Insert One Document
    usersCollection.insertOne(insertOneData).then(result => {
        console.log();
        console.log('Inserted One Successfully 🚀');
        console.log(`Inserted Name: ${insertOneData.name}`);
        console.log(result);
    }).catch(err => {
        console.log('Error in Inserting Data');
    });

    // Insert Many Documents
    usersCollection.insertMany(insertManyData).then(result => {
        console.log();
        console.log('Inserted Many Successfully');
        console.log(`Inserted Names: ${insertManyData[0].name} and ${insertManyData[1].name}`);        
    }).catch(err => {
        console.log('Error in Inserting Data');
    });
    
    // Assign Port Number to Server
    const port = 4000;
    app.listen(port, () => {
        console.log(`Server running on port http://localhost:${port}`);
    });
}).catch(err => {
    console.log('Error in connecting to MongoDB');
});





