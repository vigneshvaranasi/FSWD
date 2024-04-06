let collegeDetails ={
    college:"PVPSIT",
    city:"Vijayawada",
    branch:"CSE"
}
let stu1={
    name:"Vignesh",
    rollno:1,
}
let stu2={
    name:"Eswar",
    rollno:2,
}

Object.setPrototypeOf(stu1,collegeDetails);
Object.setPrototypeOf(stu2,collegeDetails);
console.log(stu1.college);
console.log(stu2.city);
console.log(stu1);
