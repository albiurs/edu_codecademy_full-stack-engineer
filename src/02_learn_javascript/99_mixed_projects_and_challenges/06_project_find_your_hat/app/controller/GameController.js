// == requires ==
const FieldCharModel = require('../model/FieldCharModel');


/**
 * GameController Class
 * Triggers the start of the Game and handles the game flow.
 */
class GameController {

    /**
     * constructor()
     * @param playingField  2D array
     * @param user          user class object
     */
    constructor(playingField, user) {
        this.playingField = playingField;
        this.user = user;
    }


    /**
     * playGame()
     * Triggers the start of the Game and handles the game flow.
     */
    playGame() {

        let won = false;

        // repeated input asked until the game is won or lost (break).
        while(!won) {
            this.playingField.print();
            this.user.move();

            // if currentPos is out of the array
            if(
                this.user.getCurrentPos().vert < 0 ||
                this.user.getCurrentPos().vert > this.playingField.playingField.length - 1 ||
                this.user.getCurrentPos().hor < 0 ||
                this.user.getCurrentPos().hor > this.playingField.playingField[0].length - 1
            ) {
                console.log("Out of bounds, you lost the game!");
                break;
            } else {
                // if the user falls in a hole
                if(this.playingField.playingField[this.user.getCurrentPos().vert][this.user.getCurrentPos().hor] === FieldCharModel.hole) {
                    console.log("You fell in a hole - you lost the game!");
                    break;
                }
                // if the user wins the game
                else if(this.playingField.playingField[this.user.getCurrentPos().vert][this.user.getCurrentPos().hor] === FieldCharModel.hat) {
                    console.log("You got the hat! :-)");
                    won = true;
                } else {
                    // update the playField with the pathCharacter on the current user position.
                    this.playingField.updateField(this.user.getCurrentPos().vert, this.user.getCurrentPos().hor, FieldCharModel.pathCharacter);
                }
            }
        }
    }
}

module.exports = GameController;