// Iterator Documentation
//
// There are many additional built-in array methods, a complete list of which is on the
// MDN’s Array iteration methods page:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods
//
//     The documentation for each method contains several sections:
//
//     A short definition.
//     A block with the correct syntax for using the method.
//     A list of parameters the method accepts or requires.
//     The return value of the function.
//     An extended description.
//     Examples of the method’s use.
//     Other additional information.
//
// In the instructions below, there are some errors in the code. Use the documentation for a given method to
// determine the error or fill in a blank to make the code run correctly.




const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
// Checks if there are words that are fewer than 6 characters long
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
console.log(words.some((word) => {
    return word.length < 6;
}));
// returns and logs true

// As there are words < 6 characters long...
// Use .filter to filter words longer than 5 characters long to create a new array
const interestingWords = words.filter(el => {
    return el.length > 5;   // the callback function's condition returning true or false
})
console.log(interestingWords);
// logs [ 'unique', 'uncanny', 'oxymoron' ]


// Make sure to uncomment the code below and fix the incorrect code before running it
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
console.log(interestingWords.every((word) => {
    return word.length > 5;
} ));
// returns & logs true

// alternative syntax
console.log(interestingWords.every((el) => el.length > 5));
// returns & logs true
