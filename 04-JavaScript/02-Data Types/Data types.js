let age = 1
let name = "Vignesh";
let isTrue = true;
let isFalse = false;
let myVar = null;
let undefinedVar;
let sym = Symbol("unique");

let person = { 
	name: "Vignesh", 
	age: 10, 
	isStudent: true
};

let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

function greet(name) {
    console.log("Hello, " + name + "!");
}

console.log(typeof(age));        // "number"
console.log(typeof(name));       // "string"
console.log(typeof(isTrue));     // "boolean"
console.log(typeof(person));     // "object"
console.log(typeof(greet));      // "function"
console.log(typeof(numbers));    // "object" 
console.log(typeof(fruits));     // "object"
console.log(typeof(sym));        // "symbol"
greet("Vignesh");                // "Hello, Vignesh!"