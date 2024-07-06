//  Create HTTP Server

// Import Express Module
const exp = require('express');
const app = exp();

app.get('/', (req, res) => {
    res.send('Welcome to Muiltiple APIs Server');
});

// Import User API
const userAPI = require('./APIs/userAPI');
// If path starts with /user-api, then userAPI will be called
app.use('/user-api', userAPI);

// Import Products API
const productsAPI = require('./APIs/productsAPI');
// If path starts with /products-api, then productsAPI will be called
app.use('/products-api', productsAPI);



// Assign Port Number to Server
const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});


