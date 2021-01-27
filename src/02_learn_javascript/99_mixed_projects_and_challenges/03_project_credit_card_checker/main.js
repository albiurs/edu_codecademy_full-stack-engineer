// Credit Card Checker
// Overview
//
// This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step
// tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building.
// There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the
// internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.
// Project Goals
//
// Context: The company that you work for suspects that credit card distributors have been mailing out cards that have
// invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other
// clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge
// of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of
// your time relaxing!
//
// As you progress through the steps, use the terminal and console.log() statements to check the output of your loops
// and functions.
//
// Look over the starter code. There are 15 arrays that each contain the digits of separate credit card numbers. They
// all have prefixes to reflect their status, i.e. variables that start with valid contain a valid Number, whereas
// invalid do not, and mystery variables can be either. There is also a batch array that stores all of the provided
// credit cards in a single array.
// You’ll use these arrays later to check if your functions are working properly.
//
// Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return
// true when an array contains digits of a valid credit card Number and false when it is invalid. This function should
// NOT mutate the values of the original array.
//
// To find out if a credit card Number is valid or not, use the Luhn algorithm:
// https://en.wikipedia.org/wiki/Luhn_algorithm#Description
// Generally speaking, an algorithm is a
// series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate
// certain identification numbers, e.g. credit card numbers. The calculations in the Luhn algorithm can be broken down
// as the following steps:
//
//     Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
//     As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the Number is
//     greater than 9 after doubling, subtract 9 from its value.
//     Sum up all the digits in the credit card Number.
//     If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the Number is valid, otherwise,
//     it’s invalid.
//
// Here’s a visual that outlines the steps:
// https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%201.svg
// Check your function using both the provided valid and invalid numbers.


// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
const valid6 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
/**
 * validateCred()
 * Implements the Luhn algorithm to validate the credit card Number:
 * https://en.wikipedia.org/wiki/Luhn_algorithm#Description
 * https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%201.svg
 * @param creditCardNumber
 * @returns {boolean}
 */
const validateCred = (creditCardNumber) => {
    let checkDigit = creditCardNumber[creditCardNumber.length-1];
    let sum = checkDigit;

    for(let i=creditCardNumber.length-2; i >= 0; i--) {
        if((creditCardNumber.length - i) % 2 === 0) {
            let doubleI = creditCardNumber[i] * 2;
            doubleI > 9 ? sum += doubleI - 9 : sum += doubleI;
        } else {
            sum += creditCardNumber[i];
        }
    }

    return sum % 10 === 0;
}


/**
 * idInvalidCardCompanies()
 * Identify invalid card companies
 * @param invalidCards  invalid card numbers array
 * @returns {[]}    invalid card companies
 */
const idInvalidCardCompanies = invalidCards => {
    const companyCodes = {
        3: 'Amex',
        4: 'Visa',
        5: 'Mastercard',
        6: 'Discover'
    };
    let invalidCardCompanies = [];

    const callback = number => {
        for(let prop in companyCodes) {
            if(!invalidCardCompanies.includes(companyCodes[prop])) {
                if(parseInt(prop) === number[0]) {
                    invalidCardCompanies.push(companyCodes[prop]);
                } else if(!number[0].toString() in companyCodes) {
                    console.log('Company not found');
                }
                // prop === Number[0] ? invalidCardCompanies.push('yyy') : 'Company not found';
            }
        }
    }

    invalidCards.forEach(callback);

    return invalidCardCompanies;
}



// call array.filter() with inverted validateCred() callback function to filter only invalid credit cards
let findInvalidCards = batch.filter( el => !validateCred(el));
console.log(findInvalidCards);

// output all companies having invalid cards
let invalidCardCompanies = idInvalidCardCompanies(findInvalidCards);
console.log(invalidCardCompanies);
