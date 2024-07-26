const Bottleneck = require('bottleneck'); // Use require for CommonJS
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 3000;

// Create a Bottleneck limiter
const limiter = new Bottleneck({
    minTime: 300, // Minimum time between requests
    maxConcurrent: 4 // Maximum number of concurrent requests
});

let usernames = [
    { username: 'Paidimukkula_Lavanya' },
    { username: 'siddhuparsa99' },
    { username: 'parvataneniamulya' },
    { username: 'harshabambu27' },
    { username: 'pavankc' },
    { username: 'mahesh07' },
    { username: 'harshitha.17' },
    { username: 'nikhilpolimetla8' },
    { username: 'thrinath123' },
    { username: 'nikitha_1710' },
    { username: '22501a05f2' },
    { username: 'akshitha1503' },
    { username: 'sairoshini' },
    { username: 'suryaharshasambhana5' },
    { username: 'yaswanthsaisanapala' },
    { username: 'shaikfakruddin2145' },
    { username: '22501a05g7' },
    { username: 's.udaybhaskar2005' },
    { username: 'syamprasadreddysomula' },
    { username: 'sarath7893' },
    { username: 'Latheef8' },
    { username: 'muhammadafzal' },
    { username: 'samanvitha18' },
    { username: 'tej_mahendra' },
    { username: 'yogitha543' },
    { username: 'tungala_revanth' },
    { username: 'vvsvignesh' },
    { username: 'veerankisirisha' },
    { username: 'eswar1357' }
];

// MongoDB connection URI
const uri = "mongodb+srv://pavankc005:pavankc@cluster1.qt05vl9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Function to fetch user data
async function fetchSam(username) {
    try {
        let response = await fetch(`https://codeforces.com/api/user.rating?handle=${username}`);
        if (response.status === 429 || response.status === 503) {
            console.log(`Rate limit or service unavailable for ${username}.`);
            await delay(2000); // Fixed delay before retrying
            return fetchSam(username); // Retry once
        }
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            let res = await response.json();
            let allContests = res.result;
            let attendedContests = allContests.reverse();
            return { username, attendedContests };
        } else {
            throw new Error('Received non-JSON response');
        }
    } catch (error) {
        console.error(`Failed to fetch data for ${username}:`, error);
        return { username, error: error.message };
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Connect to MongoDB and start the server
async function startServer() {
    try {
        // Connect the client to the server
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Start the Express server
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Route to fetch all users data
app.get('/fetch-users', async (req, res) => {
    try {
        let promises = usernames.map(user => limiter.schedule(() => fetchSam(user.username)));
        let info = await Promise.all(promises);

        // Insert results into MongoDB
        const db = client.db('students');
        const collection = db.collection('contestinfo');
        await collection.insertMany(info);
        res.json(info);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
startServer();
