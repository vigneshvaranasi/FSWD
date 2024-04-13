console.log(" 1. Create a promise which can be either fulfilled or rejected after 5 secs");
let condition = true;
const promiseObj = new Promise((fulfilled, rejected) => {
    setTimeout(() => {
        if(condition)
            fulfilled('Promise is fulfilled');
        else
            rejected('Promise is rejected');
    }, 5000);
});
console.log(promiseObj);

promiseObj
.then((success) => {
    console.log(success);
})
.catch((error) => {
    console.log(error);
});