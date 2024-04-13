import employees from "./exportModule.js";

console.log("1. Find the names(array of names) of employees of Hyderabad");
let hyderabadEmployees=[];
for(let i=0; i<employees.length; i++) {
    if(employees[i].address.city === "hyderabad") {
        hyderabadEmployees.push(employees[i].name);
    }
}
console.log(hyderabadEmployees);


console.log("2. Find the name and address of employees whose age between 40 and 50");
for(let i=0;i<employees.length;i++){
    if(employees[i].age>=40 && employees[i].age<=50){
        console.log(employees[i].name, employees[i].address);
    }
}

console.log("3. Find the employees who are not from Hyderabad");
for(let i=0;i<employees.length;i++){
    if(employees[i].address.city !== "hyderabad"){
        console.log(employees[i]);
    }
}


console.log("4. Find the names (array of names) of employees whose skill is reactjs");
let reactjsEmployees=[];
for(let i=0; i<employees.length; i++) {
    if(employees[i].skills.includes("reactjs")) {
        reactjsEmployees.push(employees[i].name);
    }
}
console.log(reactjsEmployees);
