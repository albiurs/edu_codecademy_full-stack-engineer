// Function Declarations
//
// In JavaScript, there are many ways to create a function. One way to create a function is by using a function
// declaration. Just like how a variable declaration binds a value to a variable name, a function declaration binds a
// function to a name, or an identifier. Take a look at the anatomy of a function declaration below:

function identifier() {
    console.log('This command runs within the function body, which consists of the {} inclusive content');
}
//
// A function declaration consists of:
//
// The function keyword.
//     - The name of the function, or its identifier, followed by parentheses.
//     - A function body, or the block of statements required to perform a specific task, enclosed in the function’s
//     curlybrackets, { }.
//
// A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over
// how to run the code inside the function body.
//
// We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before
// they’re defined.
//
// Take a look at example of hoisting:
//
// console.log(greetWorld()); // Output: Hello, World!
//
// function greetWorld() {
//     console.log('Hello, World!');
// }
//
// Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! Since hoisting
// isn’t considered good practice, we simply want you to be aware of this feature.
//
// If you want to read more about hoisting, check out MDN documentation on hoisting.



function getReminder() {
    console.log('Water the plants.');
}

function greetInSpanish() {
    console.log('Buenas Tardes.');
}