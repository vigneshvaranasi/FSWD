const fs = require('fs');

fs.appendFile('./appendedFile.txt',"This is Append Text", (err) => {
    if (err) {
        console.log("Something went wrong!", err);
    } else {
        console.log("TXT File Appended successfully!");
    }
})