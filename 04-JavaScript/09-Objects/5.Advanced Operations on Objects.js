let obj={
    a:10,
    b:20,
    c:30
}

// get all the keys of the object
console.log(Object.keys(obj));

// get all the values of the object
console.log(Object.values(obj));

// freeze the object
Object.freeze(obj);
obj.a=100;
console.log(obj);

// craete copy of the object
let obj2=Object.assign({},obj);
console.log(obj2);

// merge two objects
let obj3={
    d:40,
    e:50
}
let obj4=Object.assign({},obj,obj3);
console.log(obj4);
