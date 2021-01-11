/**
 * Getting User Input in Node.js
 */

// Learn how to handle user input synchronously in Node.js.
// Synchronous Input
//
// Node.js allows you to run JavaScript code outside of a browser window, offering powerful tools to interact with a
// computer filesystem, run web servers, and create terminal applications. Node handles these tasks by running
// asynchronously, which means that reading user input from a terminal isn’t as simple as calling a getInput() function.
// In this article, we’ll show you an easy way around that (and some tips and tricks for handling user input) by using
// $a helpful Node module.
// Working with Input
//
// Node.js provides a few ways to handle interactions, including the built-in process object and readline module.
// While these are powerful tools, they rely on callback functions and can be confusing to work with at first.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
});

// Running this code in Node, you’d see:
//
// $ node read.js
// Who are you?
// >

// Then you could enter your input based on the prompt and see the response:
//
// $ node read.js
// Who are you?
// > Codecademy
// Hey there Codecademy!
// $

// This works as intended, but it’s a lot of boilerplate, and you need to call readline.question() and create a
// callback function every time you want to use it for input. There’s a simpler way, whether you’re just getting
// started out with JavaScript development or just want to get an interactive script running as quickly as possible.



/**
 * prompt-sync
 */

// The prompt-sync Node module provides an easy-to-use alternative to this callback-based syntax.
//
// Make sure you have Node and NPM installed
// Run npm install prompt-sync in the terminal

const prompt = require('prompt-sync')();

// Notice the extra () after require(). The prompt-sync module is a function that creates prompting functions, so you
// need to call prompt-sync in order to get your actual prompting function.
//
// Once you’ve loaded the prompt-sync module and called it, using it to retrieve user input is relatively
// straightforward:

const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);

// The prompt() function returns the user feedback, so simply store that return value to a variable to use it later.
// In the example above, the name variable stores the value, and it is then repeated to the user on the next line.


// Letting Users Exit
//
// By default, most terminal programs will exit with Ctrl + C (This sends a SIGINT, or “signal interrupt” message
// indicating that a user wants to exit a program). With prompt-sync, in order to make sure that your users can exit at
// will, add a configuration object with sigint: true when invoking the prompt-sync function:

const prompt = require('prompt-sync')({sigint: true});



// Working with Numbers
//
// All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:

const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);


/**
 * Making a basic app
 */

// The code below creates a small number guessing application.

const prompt = require('prompt-sync')({sigint: true});

// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
    // Get user input
    let guess = prompt('Guess a number from 1 to 10: ');
    // Convert the string input to a number
    guess = Number(guess);

    // Compare the guess to the secret answer and let the user know.
    if (guess === numberToGuess) {
        console.log('Congrats, you got it!');
        foundCorrectNumber = true;
    } else {
        console.log('Sorry, guess again!');
    }
}