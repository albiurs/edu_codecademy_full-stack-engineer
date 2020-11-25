const _ = {

    /**
     * _.pad()
     * https://lodash.com/docs/4.17.15#pad
     * https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/pad.svg
     * chars not implemented.
     * @param string
     * @param length
     * @returns {string|*}
     */
    // CodeCademy's solution
    pad(string, length) {
        if(length <= string.length) {
            return string;
        }
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = '|'.repeat(startPaddingLength) + string + '|'.repeat(endPaddingLength);
        return paddedString;
    }
};

console.log(_.pad('xxxx', 3));
console.log(_.pad('xxxx', 4));
console.log(_.pad('xxxx', 5));
console.log(_.pad('xxxx', 6));
console.log(_.pad('xxxx', 7));
console.log(_.pad('xxxx', 8));
