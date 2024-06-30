// import fs module
const fs = require('fs');

// Use fs module
fs.readFile('./data.txt',(err,data)=>{
    if(err){
        console.log("Something went wrong!",err);
    }
    else{
        console.log(data.toString());
    }

}) 