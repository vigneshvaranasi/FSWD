//  Create HTTP Server

// Import Express Module
const exp = require('express');
const app = exp();


// Middleware Function
const midddleware1 = (req, res, next) => {
    console.log('This is middleware - 1 function');
    next();
    // res.send({message:'This is Response is form middleware - 1 function'});
};
const midddleware2 = (req, res, next) => {
    console.log('This is middleware - 2 function');
    next();
};

app.use(midddleware1);

app.get('/', (req, res) => {
    res.send({message:'Hello, World!'});
});

app.get('/about', midddleware2 ,(req, res) => {
    res.send({message:'About Page'});
});

// Assign Port Number to Server
const port = 4000;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});


