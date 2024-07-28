
// Import the jsonwebtoken module
let jwt = require('jsonwebtoken');

const tokenVerify = async (req, res, next) => {

    // Get the bearer token from the headers
    const bearerToken = req.headers.authorization;
    
    if(!bearerToken){
        res.send({message: 'Unauthorized Access'});
        return;
    }
    // Extract the token from the bearer token
    const token = bearerToken.split(' ')[1];
    console.log('token: ', token);


    // Verify the token
    try{
        let decodedToken = jwt.verify(token, process.env.SECRET)
        next();
    }catch(err){
        res.send({message: 'Token Expired Pls Login Again'});
    }
}

// Export the tokenVerify function
module.exports = tokenVerify;