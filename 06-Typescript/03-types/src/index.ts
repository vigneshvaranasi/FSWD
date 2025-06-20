// unions
type greetArgs = number | string

function greet (id: greetArgs) {
  console.log(`Hello ${id}`)
}

function greet2 (id: number | string) {
  console.log(`Hello ${id}`)
}
greet(1)
greet('1')
greet2(2)
greet2('2')

// Intersection
type Employee = {
    name:string,
    startDate: Date
}
interface Manager{
    name: string,
    department: string
}

type TechLead = Employee & Manager
const tl : TechLead = {
    name:"Vignesh",
    startDate: new Date(),
    department: "Developer"
}
console.log('tl: ', tl);
