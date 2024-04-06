console.log("3. Take a number array and print prime numbers of it");
let array=[1,2,3,4,5,6,7,8,9,10];
console.log("The Array is: "+array);

function isprime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2)
        return true;
    else
        return false;
}

let primeArray=[];
for(let i=0;i<array.length;i++)
{
    if(isprime(array[i]))
    primeArray.push(array[i]);
}
console.log("The Prime Numbers in the Array are: "+primeArray);
