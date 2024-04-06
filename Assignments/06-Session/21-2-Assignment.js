console.log("2. Consider the following array [ 1 ,2 , 3, 4 ] Create new array by adding 10 to first element, 20 to second element , 30 to third element and so on using map() method. [1,2,3,4 ]======>[ 11,22,33,44]")
let array=[1,2,3,4];
console.log("The Array is: "+array);
let newArray=array.map((num,index)=>num+(index+1)*10);
console.log("The New Array is: "+newArray);