// Number

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


// Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.
//
// The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
//
// The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, like double in Java or C#. This means it can represent fractional values, but there are some limits to what it can store. A Number only keeps about 17 decimal places of precision; arithmetic is subject to rounding. The largest value a Number can hold is about 1.8×10308. Numbers beyond that are replaced with the special Number constant Infinity.
//
// A number literal like 37 in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use. (JavaScript now has a BigInt type, but it was not designed to replace Number for everyday uses. 37 is still a Number, not a BigInt.)
//
// Number may also be expressed in literal forms like 0b101, 0o13, 0x0A. Learn more on numeric lexical grammar here.
// Description
//
// When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.


// Literal syntax

123    // one-hundred twenty-three
123.0  // same
123 === 123.0  // true

// Function syntax

Number('123')  // returns the number 123
Number('123') === 123  // true

Number("unicorn")  // NaN
Number(undefined)  // NaN

// Constructor

Number()
// Creates a new Number value.
