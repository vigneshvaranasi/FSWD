
let isRank = 1;
// Create Promise
const promiseObj = new Promise((fulfilled,rejected) => {
    if(isRank == 1) {
        fulfilled('Congratulations! You are the first rank');
    } 
    else {
        rejected('Sorry! You are not the first rank');
    }
});

console.log(promiseObj); // Promise { 'Congratulations! You are the first rank' }

// Consume Promise
promiseObj
.then((msg)=>console.log(msg))
.catch((msg)=>console.log(msg));