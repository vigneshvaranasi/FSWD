const fs = require('fs');

// Replace these with your input and output file paths
const inputFile = 'movies.json';
const outputFile = 'output.json';

// Read the file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Add comma at the end of each line
    const modifiedData = data
        .split(/\r?\n/)
        .map(line => line.trim() + ',')
        .join('\n');

    // Write the modified data to a new file
    fs.writeFile(outputFile, modifiedData, 'utf8', err => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File has been processed and saved as', outputFile);
    });
});
