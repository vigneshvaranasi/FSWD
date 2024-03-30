let a=9;
let b=10;
let c=20;
console.log("The value of a is: "+a);
console.log("The value of b is: "+b);
console.log("The value of c is: "+c);

console.log("\nGreatest number in two numbers: ", a>b?a:b);
console.log("Greatest number in three numbers: ", a>b?(a>c?a:c):b>c?b:c);

let n=10;
console.log("\nThe value of n is: "+n);
console.log("Factors Of " +n+ " are:")
for(let i=1;i<=n;i++){
    if(n%i==0){
        console.log(i);
    }
}

console.log("\nCheck whether the number is prime or not");
let count=0;
for(let i=1;i<=n;i++){
    if(n%i==0){
        count++;
    }
}
if(count==2)
    console.log("The number is prime\n");
else
    console.log("The number is not prime\n");

console.log("Print even factors of a number");
console.log("Even factors of " +n+ " are:");
for(let i=1;i<=n;i++){
    if(n%i==0 && i%2==0){
        console.log(i);
    }
}

console.log("\nSum of Digits in a Number");
let num=1234;
console.log("The number is: "+num);
let sum=0;
for(let i=0;i<n;i++){
    sum+=num%10;
    num=Math.floor(num/10);
}
console.log("The sum of digits is: "+sum);
