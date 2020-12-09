// Accessing Properties

// There are two ways we can access an object’s property. Let’s explore the first way— dot notation, ..

// You’ve used dot notation to access the properties and methods of built-in objects and data instances:

'hello'.length; // Returns 5

// With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):

let spaceship0 = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship0.homePlanet; // Returns 'Earth',
spaceship0.color; // Returns 'silver',

// If we try to access a property that does not exist on that object, undefined will be returned.

spaceship0.favoriteIcecream; // Returns undefined

// Let’s get some more practice using dot notation on an object!




let spaceship1 = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let spaceship2 = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship0.homePlanet;
let planetArray = spaceship0.flightPath;

console.log(crewCount);
console.log(spaceship0["homePlanet"]);