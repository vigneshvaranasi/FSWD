// charAt
let charAtStr = "Vignesh Varanasi";
console.log(charAtStr.charAt(0)); // V
console.log(charAtStr.charAt(1)); // i

// substring
let fullName = "Vignesh Varanasi";
console.log(fullName); // Vignesh Varanasi
console.log(fullName.substring(0)); // Vignesh Varanasi
console.log(fullName.substring(0, 7)); // Vignesh

// slice
let sliceStr = "Vignesh Varanasi";
console.log(sliceStr.slice(1,6)); // ignes

// toUpperCase
let upperStr = "vignesh varanasi";
console.log(upperStr.toUpperCase()); // VIGNESH VARANASI

// toLowerCase
let lowerStr = "VIGNESH VARANASI";
console.log(lowerStr.toLowerCase()); // vignesh varanasi

// split
let wish = "Good Morning All";
let wishSplit = wish.split(" ");
console.log(wishSplit); // ["Good", "Morning", "All"]

// replace
let replaceStr = "Hello, Vignesh!";
console.log(replaceStr.replace("Vignesh", "Pavan")); // "Hello, Pavan!"


// indexOf
let indexOfStr = "Vignesh Varanasi";
console.log(indexOfStr.indexOf("V")); // 0

// lastIndexOf
let lastIndexOfStr = "Vignesh Varanasi";
console.log(lastIndexOfStr.lastIndexOf("a")); // 11

// includes
let includesStr = "Vignesh Varanasi";
console.log(includesStr.includes("V")); // true
console.log(includesStr.includes("z")); // false
