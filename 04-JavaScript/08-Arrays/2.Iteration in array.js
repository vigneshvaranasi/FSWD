let names=['Vignesh','Eswar','Fakrudddin'];
console.log(names);

// For loop
for(let i=0;i<names.length;i++){
    console.log(names[i]);
}

// For of loop
for(let name of names){
    console.log(name);
}
 
// For each loop
names.forEach(function(name){
    console.log(name);
});