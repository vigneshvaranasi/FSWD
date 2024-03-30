let age = 1
let Name = "Vignesh";
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

function greet(Name) {
    console.log("Hello, " + Name + "!");
}

console.log(typeof(age));        	// "number"
console.log(typeof(Name));       	// "string"
console.log(typeof(isTrue));     	// "boolean"
console.log(typeof(isFalse));    	// "boolean"
console.log(typeof(myVar));    	 	// "object"
console.log(typeof(undefinedVar));  // "undefined"
console.log(typeof(sym));        	// "symbol"
console.log(typeof(person));     	// "object"
console.log(typeof(numbers));    	// "object" 
console.log(typeof(fruits));     	// "object"
console.log(typeof(greet));      	// "function"
greet("Vignesh");                	// "Hello, Vignesh!"