// Task
// youngest employee, Give 5000 bonus to all employees, find the age b/w 15-25
let emps=[
    {
        eno: 100,
        name:'ravi',
        age: 21,
        salary:2000,
    },
    {
        eno: 200,
        name:'bhanu',
        age: 25,
        salary:5000,
    },
    {
        eno: 300,
        name:'vikas',
        age: 30,
        salary:30000,
    }
]
let youngest=emps.reduce((emp1,emp2)=>emp1.age<emp2.age?emp1:emp2)
console.log(youngest)
let bonus=emps.map((emp)=>emp.salary+5000)
console.log(bonus)
let age=emps.filter((emp)=>emp.age>=15 && emp.age<=25)
console.log(age)