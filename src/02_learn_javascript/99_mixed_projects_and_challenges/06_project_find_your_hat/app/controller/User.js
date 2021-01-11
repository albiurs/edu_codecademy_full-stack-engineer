// == requires ==
const prompt = require('prompt-sync')({sigint: true});  // prompt-sync Node.js module: console prompt for user input

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

module.exports = User;