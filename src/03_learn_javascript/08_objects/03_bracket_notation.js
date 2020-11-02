// Bracket Notation

// The second way to access a key’s value is by using bracket notation, [ ].

// You’ve used bracket notation when indexing an array:

['A', 'B', 'C'][0]; // Returns 'A'

// To use bracket notation to access an object’s property, we pass in the property name (key) as a string.

// We MUST use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship0['Active Duty'];   // Returns true
spaceship0['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship0['numCrew'];   // Returns 5
spaceship0['!!!!!!!!!!!!!!!'];   // Returns undefined

// With bracket notation you can also use a variable inside the brackets to 
// -> select the keys of an object
// . This can be especially helpful when working with functions:

let returnAnyProperty = (objectName, propertyName) => objectName[propertyName];

returnAnyProperty(spaceship0, 'homePlanet'); // Returns 'Earth'

// If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.

// Let’s get some practice using bracket notation to access properties!



let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship0[propName];
console.log(isActive);
