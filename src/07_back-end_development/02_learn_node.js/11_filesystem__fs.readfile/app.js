const fs = require('fs');

let secretWord = null;
//let secretWord = 'cheeseburgerpizzabagels';   // finally assigned secretWord

let readDataCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong: ${err}`);
    } else {
        console.log(`Provided file contained: ${data}`);
    }
};

// read file
fs.readFile('./fileOne.txt', 'utf-8', readDataCallback);
fs.readFile('./anotherFile.txt', 'utf-8', readDataCallback);
fs.readFile('./finalFile.txt', 'utf-8', readDataCallback);

//error
fs.readFile('./wrongFile.txt', 'utf-8', readDataCallback);


// Output:
// Something went wrong: Error: ENOENT: no such file or directory, open './wrongFile.txt'
// Provided file contained: Not there yet! You must look in the file anotherFile.txt
//
// Provided file contained: The ancient scroll! It's beautiful! It says the secret word is ... "cheeseburgerpizzabagels".
//
// Provided file contained: So close, and yet so far. Perhaps if you look in finalFile.txt
