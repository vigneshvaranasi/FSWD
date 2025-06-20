
function doSomething<T>(arg:T):T{
    console.log(arg);
    return arg;
}

let o1 = doSomething<string>("Hello World");
let o2 = doSomething<number>(123);


function doSomethingAgain<T>(arg:T[]):T{
    console.log(arg);
    return arg[0];
}

let o3 = doSomethingAgain<string>(["Hello", "World"]);
let o4 = doSomethingAgain<number>([1, 2, 3]);
console.log(o3.toUpperCase());


