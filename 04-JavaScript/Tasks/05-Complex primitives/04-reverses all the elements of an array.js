// Write a program that reverses all the elements of an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let revarr1 = arr.reverse()
console.log('revarr1: ', revarr1);

let revarr2 = arr.map((item, index, array) => array[array.length - 1 - index]);
console.log('revarr2: ', revarr2);