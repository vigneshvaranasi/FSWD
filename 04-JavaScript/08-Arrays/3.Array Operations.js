let names=['Vignesh','Eswar','Fakrudddin'];
console.log(names);

// 1 - Insert
// 1.1 - Insert at beginning of array - unshift()
names.unshift('Pavan','Sumanth');
console.log(names);
// 1.2 - Insert at end of array - push()
names.push('Dhanush','Susruth');
console.log(names);
// 1.3 - Insert at specific index - splice()
names.splice(2,0,'Thrinath');
console.log(names);

// 2 - Delete
// 2.1 - Delete at beginning of array - shift()
names.shift();
console.log(names);
// 2.2 - Delete at end of array - pop()
names.pop();
console.log(names);
// 2.3 - Delete at specific index - splice()
names.splice(2,1);
console.log(names);

// 3 - Update
names.splice(2,1,'Tej');
console.log(names);

// 4 - Concat
let schoolFriends=['Kireeti','Charith','Karthik','Vijay Vardhan']
let collegeFriends=['Eswar','Fakruddin','Pavan','Sumanth']
let allFriends=schoolFriends.concat(collegeFriends);
console.log(allFriends);

// 5 - Slice
let slicedArray=allFriends.slice(2,5);
console.log(slicedArray);

// 6 - Reverse
