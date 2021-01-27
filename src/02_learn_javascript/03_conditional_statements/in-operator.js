// in-operator

// How to check if an object has a key in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

const car = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('make' in car); // expected output: true

delete car.make;
console.log(car);   // { model: 'Accord', year: 1998 }
console.log('make' in car); // false

if ('make' in car === false) {
    car.make = 'Suzuki';
}
console.info(car);  // { model: 'Accord', year: 1998, make: 'Suzuki' }
console.log(car.make);  // expected output: "Suzuki"
console.log('make' in car); // true




// Arrays
let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple']
console.log(0 in trees);        // returns true
console.log(3 in trees);        // returns true
console.log(6 in trees);        // returns false
console.log('bay' in trees);    // returns false (you must specify the index Number, not the value at that index)
console.log('length' in trees); // returns true (length is an Array property)
console.log(Symbol.iterator in trees); // returns true (arrays are iterable, works only in ES2015+)

// Predefined objects
console.log('PI' in Math);          // returns true

// Custom objects
let mycar = {make: 'Honda', model: 'Accord', year: 1998}
console.log('make' in mycar);  // returns true
console.log('model' in mycar); // returns true
