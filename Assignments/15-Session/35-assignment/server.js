let express = require('express');
let app = express();

let productsData = [
    {id:1,name:'Product 1'},
    {id:2,name:'Product 2'},
    {id:3,name:'Product 3'},
    {id:4,name:'Product 4'},
]


// GET Request
app.get('/products',(req,res)=>{
    res.json(productsData);
})

// GET Request by ID
app.get('/products/:id',(req,res)=>{
    let id = req.params.id;
    let product = productsData.find(product=>product.id == id);
    if(!product){
        res.json({message:'Product not found'});
    }
    else
        res.json(product);
})

// POST Request
app.use(express.json());
app.post('/products',(req,res)=>{
    let product = req.body;
    productsData.push(product);
    res.json({message:'Product added successfully',payLoad : productsData});
})

// PUT Request
app.put('/products',(req,res)=>{
    let product = req.body;
    let index = productsData.findIndex(p=>p.id == product.id);
    if(index == -1){
        res.json({message:'Product not found'});
    }
    else{
        productsData[index] = product;
        res.json({message:'Product updated successfully',payLoad : productsData});
    }
})

// DELETE Request
app.delete('/products',(req,res)=>{
    let id = req.body.id;
    let index = productsData.findIndex(p=>p.id == id);
    if(index == -1){
        res.json({message:'Product not found'});
    }
    else{
        productsData.splice(index,1);
        res.json({message:'Product deleted successfully',payLoad : productsData});
    }
})



app.listen(3500,()=>{
    console.log('Server started on http://localhost:3500');
})