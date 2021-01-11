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

    // == static fields ==
    static hat = '^';
    static hole = 'O';
    static fieldCharacter = '░';
    static pathCharacter = '*';

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
                    fieldArray[i][k] = this.hole;
                } else {
                    fieldArray[i][k] = this.fieldCharacter;
                }
            }
        }

        fieldArray[0][0] = this.pathCharacter;
        do {
            fieldArray[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)] = this.hat;
        } while (fieldArray[0][0] === this.hat);

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