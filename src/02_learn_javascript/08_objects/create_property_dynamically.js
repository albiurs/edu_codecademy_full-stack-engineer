// dynamically add new property to an object
var data = {
    'PropertyA': 1,
    'PropertyB': 2,
    'PropertyC': 3
};

data["PropertyD"] = 4;

// logs 4
console.log(data.PropertyD);
console.log(data["PropertyD"]);




const car = { model: 'Accord', year: 1998 };
console.log(car);   // { model: 'Accord', year: 1998 }
console.log('make' in car); // expected output: false

if ('make' in car === false) {
    car.make = 'Suzuki';
}
console.info(car);  // { model: 'Accord', year: 1998, make: 'Suzuki' }
console.log(car.make);  // expected output: "Suzuki"
console.log('make' in car); // true
