
// Named Export

export let a = 9;
export let Username = "Vignesh";
export let arr = [1, 2, 3, 4, 5];
export let obj = { 
    name: "Vignesh", 
    age: 19
};


// pack all the named exports into a single object

// let a = 9;
// let Username = "Vignesh";
// let arr = [1, 2, 3, 4, 5];
// let obj = { 
//     name: "Vignesh", 
//     age: 19
// };
// export{a,Username,arr,obj};


// Default Export
// export default Username;

// Default Export pack all the default exports into a single object
export default {Username, a, arr, obj};
