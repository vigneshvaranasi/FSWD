console.log("1. Create Employee class and add properties name, age, basic and add getSalary method to its prototype. Create 5 Employee objects and print their salaries.")
class Employee{
    constructor(name,age,basic){
        this.name=name;
        this.age=age;
        this.basic=basic;
    }
}
Employee.prototype.getSalary=function(){
    return this.basic;
}
let emp1=new Employee("Vignesh",21,50000);
let emp2=new Employee("Eswar",22,60000);
let emp3=new Employee("Fakruddin",23,70000);
let emp4=new Employee("Pavan",24,80000);
let emp5=new Employee("Sumanth",25,90000);
console.log("The Salary of Employee 1 is: "+emp1.getSalary());
console.log("The Salary of Employee 2 is: "+emp2.getSalary());
console.log("The Salary of Employee 3 is: "+emp3.getSalary());
console.log("The Salary of Employee 4 is: "+emp4.getSalary());
console.log("The Salary of Employee 5 is: "+emp5.getSalary());