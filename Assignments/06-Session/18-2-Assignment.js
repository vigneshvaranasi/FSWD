console.log("2. Take a number array and print even numbers of it");
let array=[1,2,3,4,5,6,7,8,9,10];
console.log("The Array is: "+array);

let evenArray=[];
for(let i=0;i<array.length;i++){
    if(array[i]%2==0)
    evenArray.push(array[i])
}

console.log("The Even elements in the Array are: "+evenArray);