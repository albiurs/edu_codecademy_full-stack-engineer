// in-operator

// How to check if an object has a key in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in


const object = {key: 'value'};
console.log('key' in object); // true
console.log(!'key' in object); // false



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

