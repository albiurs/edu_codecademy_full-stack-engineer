// set constant with temperature in Kelvin
const kelvin = 293;
console.log(`The temperature is ${kelvin} Kelvin.`);

// set constant with temperature in Celsius
const celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Celsius.`);

// convert celsius into Fahrenheit using a variable which allows to change its value
let fahrenheit = celsius * (9/5) +32;
// round down the value of fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
