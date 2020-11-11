
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
