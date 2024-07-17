const exp = require('express');
const app = exp();
const { MongoClient } = require('mongodb');

const dbURL = 'mongodb://127.0.0.1:27017';
const mc = new MongoClient(dbURL);

let insertOneData = {
  name: 'Dev Duo',
  age: 19,
  languages: ['C++', 'JavaScript', 'Java'],
  address: {
    city: 'Vijayawada',
    state: 'Andhra Pradesh'
  }
};

let insertManyData = [
  {
    name: 'Vignesh',
    age: 20,
    languages: ['C', 'ReactJS', 'Java'],
    address: {
      city: 'Mumbai',
      state: 'Maharashtra'
    }
  },
  {
    name: 'Pavan CH',
    age: 21,
    languages: ['C#', 'GO', 'Python'],
    address: {
      city: 'Bangalore',
      state: 'Karnataka'
    }
  }
];

let findOneData = {
  name: 'Dev Duo'
};

let updateOneData = {
  name: 'Dev Duo',
  $set: {
    age: 25
  }
};

async function main() {
  try {
    // Connect to MongoDB
    await mc.connect();
    
    // Connect to Database
    const usersDatabase = mc.db('CRUD');
    
    // Connect to Collection
    const usersCollection = usersDatabase.collection('Users');
    
    // Share the Collection with the APIs
    app.set('usersCollection', usersCollection);
    
    console.log(`Connected to MongoDB Database: ${usersDatabase.databaseName} and Collection: ${usersCollection.collectionName} 🌍`);

    // Insert One Document
    const insertOneResult = await usersCollection.insertOne(insertOneData);
    console.log('\nInserted One Successfully 🚀');
    console.log(`Inserted Name: ${insertOneData.name}`);
    console.log(insertOneResult);

    // Insert Many Documents
    const insertManyResult = await usersCollection.insertMany(insertManyData);
    console.log('\nInserted Many Successfully');
    console.log(`Inserted Names: ${insertManyData[0].name} and ${insertManyData[1].name}`);
    console.log(insertManyResult);

    // Find One Document
    const findOneResult = await usersCollection.findOne(findOneData);
    console.log('\nFound One Document Successfully');
    console.log(findOneResult);

    // Assign Port Number to Server
    const port = 4000;
    app.listen(port, () => {
      console.log(`Server running on port http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error in connecting to MongoDB or performing operations', err);
  }
}

main();
