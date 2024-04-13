
let condition = true;
// Create Promise
const promiseObj = new Promise((fulfilled,rejected) => {
    if(condition) {
        fulfilled('Promise is fulfilled');
    } 
    else {
        rejected('Promise is rejected');
    }
});

console.log(promiseObj); // Promise { 'Promise is fulfilled' }

// Consume Promise
promiseObj.then((success) => {
    console.log(success);
}).catch((error) => {
    console.log(error);
});

