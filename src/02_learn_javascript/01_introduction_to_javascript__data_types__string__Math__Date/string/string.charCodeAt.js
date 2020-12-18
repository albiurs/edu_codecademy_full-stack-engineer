// String.prototype.charCodeAt()

// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

// https://en.wikipedia.org/wiki/List_of_Unicode_characters

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// expected output: "The character code 113 is equal to q"