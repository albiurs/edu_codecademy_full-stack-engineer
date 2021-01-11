// Find Your Hat
// -------------
// Overview
//
// This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step
// tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building.
// There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the
// internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

// Project Goals
//
// In this project, you’ll be building an interactive terminal game. The scenario is that the player has lost their
// hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping
// outside of the field.

// Prerequisites
//
// In this project, you’ll be building an interactive terminal game with JavaScript classes. Because the goal involves
// user input, make sure you read our guide on working with user input in Node.js:
// https://www.codecademy.com/articles/getting-user-input-in-node-js .
// If you complete this project on our platform, you can test and run your code with the command node main.js in our
// terminal.
//
// Watch this animated gif to get a sense of what you’ll be building: find-your-hat-demo.gif


// == fields ==
const PlayingField = require('./PlayingField');
const User = require('./User');
const GameController = require('./GameController');


// const myField = new Field([
//     ['*', '░', '░'],
//     ['░', 'O', '░'],
//     ['░', '^', '░'],
// ]);

// console.log(myField.field[0][0]);
// console.log(myField.field[1][1]);
// console.log(myField.field[1][2]);
// console.log(myField.field[2][1]);
// console.log(user.getCurrentPos());
// console.log(user.getCurrentPos().vert);
// console.log(user.getCurrentPos().hor);
// console.log(user.direction);

const playingField = new PlayingField(PlayingField.generateField(5, 10, 30));
const user = new User();
const gameController = new GameController(playingField, user);

gameController.playGame();

