// declare and initialize a constant with my age
const myAge = 48;

// declare and initialize a variable earlyYears
let earlyYears = 2;

// calculate early and later dog years
// The first two years of a dog’s life count as 10.5 dog years each.
earlyYears *= 10.5;
// Each year following equates to 4 dog years.
let laterYears = myAge - 2;
laterYears *= 4;

//console.log(earlyYears);
//console.log(laterYears);

// my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// my name stored to a variable in lower case
let myName = 'Urs'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
