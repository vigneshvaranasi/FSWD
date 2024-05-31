//JS Object
let emp = {
    name: "Vignesh",
    age: 18,
    city: "Vijayawada",
}

console.log(emp);

// Convert JS Object to JSON
let empJSON = JSON.stringify(emp);
console.log(empJSON);

// Convert JSON to JS Object
let empJS = JSON.parse(empJSON);
console.log(empJS);