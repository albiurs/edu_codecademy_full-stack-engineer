// == requires ==
const FieldCharModel = require('./FieldCharModel');

/**
 * Class PlayingField
 * ------------------
 * Playing Field which must be initiated by an array of characters declared above.
 *
 * Functions:
 * generateField()
 * print()
 * updateField()
 */
class PlayingField {

    /**
     * constructor ()
     * @param field     2D playing field array
     */
    constructor(field = []) {
        this.playingField = field;
    }

    /**
     * generateField()
     * Generates and returns a random 2D-PlayingField array.
     *
     * @param height    field height
     * @param width     field length
     * @param percentageOfHoles     % of holes relative to the amount of fields.
     * @returns {[]}    random 2D-PlayingField array
     */
    static generateField(height, width, percentageOfHoles) {

        let fieldArray = [];

        for(let i=0; i<height; i++) {
            fieldArray[i] = [];
            for(let k=0; k<width; k++) {
                if(Math.floor(Math.random() * 100) <= percentageOfHoles) {
                    fieldArray[i][k] = FieldCharModel.hole;
                } else {
                    fieldArray[i][k] = FieldCharModel.fieldCharacter;
                }
            }
        }

        fieldArray[0][0] = FieldCharModel.pathCharacter;
        do {
            fieldArray[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)] = FieldCharModel.hat;
        } while (fieldArray[0][0] === FieldCharModel.hat);

        return fieldArray;
    }

    /**
     * print()
     * Prints the PlayingField
     */
    print() {
        for(let i=0; i<this.playingField.length; i++) {
            console.log(this.playingField[i].join(''));
        }
    }

    updateField(vert, hor, char) {
        this.playingField[vert][hor] = char;
    }
}

module.exports = PlayingField;