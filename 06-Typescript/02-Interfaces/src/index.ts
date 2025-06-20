interface User {
  firstName: string
  lastName: string
  age: number,
  email?: string,
}

function isLegal (user: User): boolean {
  if (user.age >= 18) return true
  return false
}

function greet (user: User): void {
  console.log(`Hello ${user.firstName} ${user.lastName}`)
}

console.log(
  isLegal({
    firstName: 'Vignesh',
    lastName: 'Varanasi',
    age: 20
  })
)
greet({
  firstName: 'Vignesh',
  lastName: 'Varanasi',
  age: 20
})


// Implementing the interface
interface Person {
  name: string
  age: number
  greet(phrase: string): void
}

class Employee implements Person{
  name: string;
  age : number;
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
  greet(phrase: string): void {
      console.log(`${phrase} ${this.name}!`);
  }
}
const obj = new Employee('Vignesh',20)
obj.greet('Hello');