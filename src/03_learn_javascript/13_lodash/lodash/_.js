const _ = {

    /**
     * _.clamp()
     * https://lodash.com/docs/4.17.15#clamp
     * https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/clamp.svg
     * @param number
     * @param lower
     * @param upper
     */
    // my _.clamp solution
    // clamp(number, lower, upper) {
    //     let arr = [number, lower, upper, ];
    //
    //     // sort array
    //     let counter = 0;
    //
    //     while(counter < arr.length - 1) {
    //         if(arr[counter] > arr[counter + 1]) {
    //             // swap number and lower
    //             let tmp = arr[counter];
    //             arr[counter] = arr[counter + 1];
    //             arr[counter + 1] = tmp;
    //         }
    //         counter ++;
    //     }
    //     return arr[1];
    // },

    // CodeCademy's _.clamp solution:
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },


    /**
     * _.inRange()
     * https://lodash.com/docs/4.17.15#inRange
     * @param number
     * @param start
     * @param end
     * @returns {boolean}
     */
    // my _.inRange solution
    // inRange(number, start, end = 0) {
    //     if(start > end) {
    //         [start, end] = [end, start];
    //     }
    //     return number >= start && number < end;
    // },

    // CodeCademy's _.inRange solution
    inRange(number, start, end) {
        if(end === undefined) {
            end = start;
            start = 0;
        }
        if(start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        let isInRange = start <= number && number < end;
        return isInRange;
    },


    /**
     * _.words()
     * https://lodash.com/docs/4.17.15#words
     * Pattern not implemented.
     * @param string
     * @returns {*}
     */
    // my solution
    words(string) {
        return string.split(' ');
    },

    // CodeCademy's solution
    // words(string) {
    //     let words = string.split(' ');
    //     return words;
    // },


    /**
     * _.pad()
     * https://lodash.com/docs/4.17.15#pad
     * https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/pad.svg
     * chars not implemented.
     * @param string
     * @param length
     * @returns {string|*}
     */
    // my solution
    // pad(string, length) {
    //     let diffLength = length - string.length;
    //     if(diffLength <= 0) {
    //         return string;
    //     } else if(diffLength % 2 === 0) {
    //         let concatString = '';
    //         for(let i=0; i<diffLength/2; i++) {
    //             concatString = concatString + ' ';
    //         }
    //         return concatString + string + concatString;
    //     } else {
    //         let concatString = '';
    //         for(let i=0; i<Math.floor(diffLength/2); i++) {
    //             concatString = concatString + ' ';
    //         }
    //         return concatString + string + concatString + ' ';
    //     }
    // },

    // CodeCademy's solution
    pad(string, length) {
        if(length <= string.length) {
            return string;
        }
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    }
};


console.log(_.clamp(3, 2, 4));    // 3
console.log(_.inRange(2, 1, 3));    // true
console.log(_.words(('xxx yyyy & zzz')));              // [ 'xxx', 'yyyy', '&', 'zzz' ]
console.log(_.pad('xxxx', 7));




// Math.floor(length / string.length)







// Do not write or modify code below this line.
module.exports = _;