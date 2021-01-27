// Write a function factorial() that takes a Number as an argument and returns the factorial of the Number.
//
//     Example:
//
// factorial(6);
// // returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720
//
// Assume only positive numbers will be given as an argument for the factorial() function.


const factorial = number => {
    let newNumber = 1;
    for(let i=number; i>0; i--) {
        newNumber = newNumber * i;
    }
    return newNumber;
}

console.log(factorial(6));
