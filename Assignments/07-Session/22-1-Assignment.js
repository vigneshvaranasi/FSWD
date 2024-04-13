console.log("1. aaaabbababababbbbabababaaaa Find frequency of a and b.");
let str = "aaaabbababababbbbabababaaaa";
let a = 0;
let b = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "a")
        a++;
    else if (str[i] == "b")
        b++;
}
console.log("\nThe string is: " + str);
console.log(`Frequency of a is ${a} and b is ${b}.`);