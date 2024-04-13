console.log("2. Write a function to receive a string of multiple words as argument and then print the no of words in that string.")

function countWords(str){
    let words = str.split(" ");
    return words.length;
}
let str = "This is a string of multiple words.";
console.log("\nString is: "+str);
console.log("No of words in the string is:."+countWords(str));