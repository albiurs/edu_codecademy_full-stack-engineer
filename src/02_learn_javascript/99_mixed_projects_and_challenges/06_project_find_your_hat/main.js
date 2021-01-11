// Find Your Hat
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


const PlayingField = require('./PlayingField');
const prompt = require('prompt-sync')({sigint: true});  // console prompt for user input


/**
 * Class User
 * ----------
 * Defines the user's current position (vertical / horizontal) on the playing field and the required functions to
 * manipulate the position.
 *
 * Functions:
 * move()
 * getCurrentPos()
 */
class User {

    constructor() {
        this.currentPos = {
            vert: 0,    // vertical position in 2D array
            hor: 0      // horizontal position in 2D array
        }
        this.direction = '';    // direction to move
    }

    /**
     * move()
     * Handles the user's inputs to move the position on the playing field.
     * User console inputs are handled by the 'prompt-sync' module.
     */
    move() {
        this.direction = prompt('Which way (u/d/l/r)? ');

        switch (this.direction) {
            case 'u':   // up
                this.currentPos.vert -= 1;
                break;
            case 'd':   // down
                this.currentPos.vert += 1;
                break;
            case 'l':   // left
                this.currentPos.hor -= 1;
                break;
            case 'r':   // right
                this.currentPos.hor += 1;
                break;
            default:
                console.log('Wrong input! Try again...');
                break;
        }
    }

    /**
     * getCurrentPos()
     * @returns {*|{vert: number, hor: number}}    object with current vert/hor position on the playing field.
     */
    getCurrentPos() {
        return this.currentPos;
    }
}


const playGame = () => {
    let won = false;

    while(!won) {
        playingField.print();
        // console.log(user.getCurrentPos());
        // console.log(myField.field[user.getCurrentPos().vert][user.getCurrentPos().hor]);
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
            if(playingField.playingField[user.getCurrentPos().vert][user.getCurrentPos().hor] === PlayingField.hole) {
                console.log("You fell in a hole - you lost the game!");
                break;
            } else if(playingField.playingField[user.getCurrentPos().vert][user.getCurrentPos().hor] === PlayingField.hat) {
                console.log("You got the hat! :-)");
                won = true;
            }
            playingField.updateField(user.getCurrentPos().vert, user.getCurrentPos().hor, PlayingField.pathCharacter);
        }
    }
}

// const myField = new Field([
//     ['*', '░', '░'],
//     ['░', 'O', '░'],
//     ['░', '^', '░'],
// ]);

const playingField = new PlayingField(PlayingField.generateField(5, 10, 30));

const user = new User();



// console.log(myField.field[0][0]);
// console.log(myField.field[1][1]);
// console.log(myField.field[1][2]);
// console.log(myField.field[2][1]);
// console.log(user.getCurrentPos());
// console.log(user.getCurrentPos().vert);
// console.log(user.getCurrentPos().hor);
// console.log(user.direction);

playGame();

