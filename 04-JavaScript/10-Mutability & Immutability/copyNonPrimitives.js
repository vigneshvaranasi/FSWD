// Non Primitives

let person={
    name:"Vignesh",
    age:19
};

// Create Copy using Spread Operator
let personCopy={...person};

// Mutate
person.name="Pavan";
console.log(person);
console.log(personCopy);

// Create Copy using Object.assign
let personCopy2=Object.assign({},person);

// Mutate
person.name="Vignesh";
console.log(person);
console.log(personCopy2);