let arr=[1,-10,20,-55,100,-40]

// Without Filter
let positiveArray=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        positiveArray.push(arr[i])
    }
}
console.log(positiveArray) 

// Filter

// Function
let positiveArrayFunction=arr.filter(function(num){
    return num>0
})
console.log(positiveArrayFunction)

// Arrow Function
let positiveArrayArrow=arr.filter((num)=>num>0)
console.log(positiveArrayArrow)

// Map
console.log(arr)
let doubleArray=arr.map((num)=>num+10)
console.log(doubleArray)

// Task add 10 for even number and 20 for odd number
console.log(arr)
let Task=arr.map((num)=>num%2==0?num+10:num+20)
console.log(Task)

// for each
arr.forEach((element,index)=>{
    console.log(`Index: ${index} Element: ${element}`)
})

// find
let findArray=arr.find((num)=>num==20)
console.log(findArray)

// findIndex
let findIndexArray=arr.findIndex((num)=>num==20)
console.log(findIndexArray)

// reduce


