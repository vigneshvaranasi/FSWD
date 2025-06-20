// How to give types to arguments in the functions
function greet (fname: string, age: number) {
  console.log(`Hello ${fname}`)
  console.log(`Your age is: ${age}`)
}
greet('Vignesh', 20)

// give types for retrun value
function sum (a: number, b: number): number {
  return a + b
}
sum(10,20)
console.log('sum(10,20): ', sum(10,20));


function isLeagal(age:number):boolean{
    if(age>=18)
        return true;
    return false;
}
console.log('isLeagal(18): ', isLeagal(18));
console.log('isLeagal(14): ', isLeagal(14));

// give a function as arg for another function
function runAfter1s(fun:()=>void){
    setTimeout(fun,1000)
}

runAfter1s(function(){
    console.log("hii");
})

function getNumberFunction(fn:number){
    console.log('fn: ', fn);
}

getNumberFunction(sum(10,20))

// Interfaces
