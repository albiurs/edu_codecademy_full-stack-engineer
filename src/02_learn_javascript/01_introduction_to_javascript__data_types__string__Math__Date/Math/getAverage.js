/**
 * getAverage()
 * @param arr
 * @returns {number}
 */
const getAverage = (arr = []) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    return (sum / arr.length) || 0;
}

console.log(getAverage([1,2,3]));     // returns 2
console.log(getAverage([]));          // returns 0
