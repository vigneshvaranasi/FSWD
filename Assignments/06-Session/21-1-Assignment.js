console.log("1. Find sum of elements of an array")
let arr=[1,2,3,4,5];
console.log("The Array is: "+arr);
sum=arr.reduce((sum,num)=>sum+num,0);
console.log("The Sum of elements in the Array is:"+sum);