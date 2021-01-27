/*
Math.max()

https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/max

The Math.max() function returns the largest of the zero or more numbers given as input parameters,
or NaN if any parameter isn't a number and can't be converted into one.

Syntax:
Math.max([value1[, value2[, ...]]])

Parameters:
value1, value2, ...

Return value:
The largest of the given numbers. If any one or more of the parameters cannot be converted into a number,
NaN is returned. The result is -Infinity if no parameters are provided.
 */


console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

const array1 = [1, 3, 2, 4, -1];

console.log(Math.max(...array1));
// expected output: 4





const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    }
};

console.log(_.clamp(3,2,4)); // 3
