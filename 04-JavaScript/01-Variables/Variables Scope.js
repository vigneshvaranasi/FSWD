let globalVar = "I am global";

function exampleFunction() {
    console.log(globalVar); // Accessible inside the function
}
exampleFunction();
console.log(globalVar);    // Accessible outside the function

function localExample() {
    let localVar = "I am local";
    console.log(localVar);   // Accessible inside the function
}

localExample();
// console.log(localVar);  // This would result in an error; localVar is not accessible outside the function

function localExample() {
    let localVar = "I am local";
    console.log(localVar);   // Accessible inside the function
}

localExample();
// console.log(localVar);  // This would result in an error; localVar is not accessible outside the function


function localExample() {
    let localVar = "I am local";
    console.log(localVar);   // Accessible inside the function
}

localExample();
// console.log(localVar);  // This would result in an error; localVar is not accessible outside the function