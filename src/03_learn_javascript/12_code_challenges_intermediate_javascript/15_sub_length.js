// Write a function subLength() that takes 2 parameters, a string and a single character. The function
// should search the string for the two occurrences of the character and
// return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of
// the character the function should return 0.
//
// Examples:
//
// subLength('Saturday', 'a'); // returns 6
// subLength('summer', 'm'); // returns 2
// subLength('digitize', 'i'); // returns 0
// subLength('cheesecake', 'k'); // returns 0

const subLength = (str, char) => {
    let counter = 0;
    let firstIndex = 0;
    let secondIndex = 0;

    for(let i=0; i<str.length; i++) {
        if(str[i] === char) {
            if (counter === 0)  {
                firstIndex = i;
                counter++;
            } else if (counter === 1) {
                secondIndex = i;
                counter++;
            } else if (counter > 1) {
                counter ++;
            }
        }
        // console.log('counter: ' + counter);
        // console.log('firstIndex: ' + firstIndex);
        // console.log('secondIndex: ' + secondIndex);
    }

    let diffIndex = secondIndex - firstIndex;

    if (diffIndex > 0 && counter === 2) {
        return diffIndex + 1;
    } else {
        return 0;
    }
}

subLength('Saturday', 'a'); // returns 6
console.log(subLength('Saturday', 'a')); // prints 6
subLength('summer', 'm'); // returns 2
console.log(subLength('summer', 'm')); // prints 2
subLength('digitize', 'i'); // returns 0
console.log(subLength('digitize', 'i')); // prints 0
subLength('cheesecake', 'k'); // returns 0
console.log(subLength('cheesecake', 'k')); // prints 0
