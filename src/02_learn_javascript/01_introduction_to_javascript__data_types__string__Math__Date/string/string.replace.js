// String.prototype.replace()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The
// pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
// If pattern is a string, only the first occurrence will be replaced.
//
// The original string is left unchanged.


// replace with RegExp
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"



// replace with a String
function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
}

console.log(replaceFirstOccurence('Merry Xmas', 'Xmas', 'Christmas'));
