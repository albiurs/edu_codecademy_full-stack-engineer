// String.prototype.substring()
//
// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"




function capitalizeFirstCharacterOfWords(string) {
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
    return arr.join(" ");
}

console.log(capitalizeFirstCharacterOfWords('hello world'));    // Hello World