// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

function fits(x, y) {
    if (Number.isInteger(y / x)) {
        return 'Fits!';
    }
    return 'Does NOT fit!';
}

console.log(fits(5, 10));
// expected output: "Fits!"

console.log(fits(5, 11));
// expected output: "Does NOT fit!"