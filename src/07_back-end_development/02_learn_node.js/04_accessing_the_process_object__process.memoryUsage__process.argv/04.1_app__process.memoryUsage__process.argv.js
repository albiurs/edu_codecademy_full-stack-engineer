// We want the program in 03_app.js to store the starting amount of memory used (heapUsed), perform an operation, and then
// compare the final amount of memory used to the original amount. Right now, the initialMemory variable is assigned to
// null. Change this line, so that initialMemory is instead assigned the value of the heapUsed property on the object
// returned from invoking the process.memoryUsage() method.


// call program:
// $ node 04.1_app__process.memoryUsage__process.argv.js AnyParameterWord

console.log('process.memoryUsage(): ');
console.log(process.memoryUsage());
console.log('\n');

// initial memory usage of the current process/program
let initialMemory = process.memoryUsage().heapUsed;

// get the second parameter form the terminal
let word = process.argv[2];

console.log(`Your word is ${word}\n`)

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time
for (let i = 0; i < 1000000; i++){
    wordArray.push(`${word} count: ${i}`)
}

console.log(`Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${process.memoryUsage().heapUsed}. \nAfter using the loop to add elements to the array, the process is using ${process.memoryUsage().heapUsed - initialMemory} more bytes of memory.`);

