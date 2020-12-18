// String.fromCharCode()

// The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.

// https://en.wikipedia.org/wiki/List_of_Unicode_characters

// BMP characters, in UTF-16, use a single code unit:
console.log(String.fromCharCode(65, 66, 67));   // returns "ABC"
console.log(String.fromCharCode(0x2014));       // returns "—"
console.log(String.fromCharCode(0x12014));      // also returns "—"; the digit 1 is truncated and ignored
console.log(String.fromCharCode(8212));         // also returns "—"; 8212 is the decimal form of 0x2014

// Supplementary characters, in UTF-16, require two code units (i.e. a surrogate pair):
console.log(String.fromCharCode(0xD83C, 0xDF03)); // Code Point U+1F303 "Night with
console.log(String.fromCharCode(55356, 57091));   // Stars" == "\uD83C\uDF03"
console.log(String.fromCharCode(0xD834, 0xDF06, 0x61, 0xD834, 0xDF07)); // "\uD834\uDF06a\uD834\uDF07"
