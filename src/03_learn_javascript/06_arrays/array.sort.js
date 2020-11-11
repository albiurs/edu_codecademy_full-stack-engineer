/**
 * Sort strings alphabetically
 * @type {string[]}
 */
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]



/**
 * Sort numbers
 * @type {number[]}
 */
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]



/**
 * Sort Years
 */
// sort ascending
// simple sort call
// const sortYearsAsc = years => years.sort();

// arrow function version using a compare function
const sortYearsAsc = years => years.sort((a, b) => a - b);


// sort descending:
// arrow function version
// const sortYearsDesc = years => years.sort((a, b) => b - a);

// classic function version
function sortYearsDesc (years) {
    function compare (a, b) {
        return b - a;
    }
    return years.sort(compare);
}

// Feel free to uncomment the below code to test your function:
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYearsAsc(years))
// Should print [ 1922, 1951, 1963, 1970, 1982, 1999, 2011, 2018 ]

console.log(sortYearsDesc(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]



/**
 * Sort Species by Teeth
 */
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
const sortSpeciesByTeeth = array => {
    return array.sort((a, b) => a.numTeeth - b.numTeeth);
}

// Feel free to comment out the code below when you're ready to test your function!
console.log(sortSpeciesByTeeth(speciesArray))

// Should print [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
