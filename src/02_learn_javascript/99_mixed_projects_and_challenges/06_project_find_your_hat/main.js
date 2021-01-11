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


/**
 * playGame()
 * Triggers the start of the Game and handles the game flow.
 */
const playGame = () => {

    let won = false;

    // repeated input asked until the game is won or lost (break).
    while(!won) {
        playingField.print();
        user.move();

        // if currentPos is out of the array
        if(
            user.getCurrentPos().vert < 0 ||
            user.getCurrentPos().vert > playingField.playingField.length - 1 ||
            user.getCurrentPos().hor < 0 ||
            user.getCurrentPos().hor > playingField.playingField[0].length - 1
        ) {
            console.log("Out of bounds, you lost the game!");
            break;
        } else {
            // if the user falls in a hole
            if(playingField.playingField[user.getCurrentPos().vert][user.getCurrentPos().hor] === PlayingField.hole) {
                console.log("You fell in a hole - you lost the game!");
                break;
            }
                // if the user wins the game
                else if(playingField.playingField[user.getCurrentPos().vert][user.getCurrentPos().hor] === PlayingField.hat) {
                console.log("You got the hat! :-)");
                won = true;
            } else {
                // update the playField with the pathCharacter on the current user position.
                playingField.updateField(user.getCurrentPos().vert, user.getCurrentPos().hor, PlayingField.pathCharacter);
            }
        }
    }
}

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

playGame();

