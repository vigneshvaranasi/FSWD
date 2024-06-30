const fs = require('fs');
let data = {
    person: {
        name: 'vvsv',
        age: 19
    },
    marks: [10, 20, 30, 40, 50]
}
fs.writeFile('./writtenJSON.json', JSON.stringify(data), (err) => {
    if (err) {
        console.log("Something went wrong!", err);
    } else {
        console.log("JSON File written successfully!");
    }
})
fs.writeFile('./writtenFile.txt',"This is the Text written by fs.write()", (err) => {
    if (err) {
        console.log("Something went wrong!", err);
    } else {
        console.log("TXT File written successfully!");
    }
})