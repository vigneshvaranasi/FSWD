// Write a program to print the biggest number in an array
let arr = [1, 2, 3, 4, 5, 15, 7, 8, 9, 10];
let max = arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(max);
