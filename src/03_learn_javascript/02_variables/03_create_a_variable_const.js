// Create a Variable: const
//
// The const keyword was also introduced in ES6, and is short for the word constant. Just like with var and let you can
// store any value in a const variable. The way you declare a const variable and assign a value to it follows the same
// structure as let and var. Take a look at the following example:

const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

// However, a const variable cannot be reassigned because it is constant. If you try to reassign a const variable,
// you’ll get a TypeError.
//
// Constant variables must be assigned a value when declared. If you try to declare a const variable without a value,
// you’ll get a SyntaxError.
//
// If you’re trying to decide between which keyword to use, let or const, think about whether you’ll need to reassign
// the variable later on. If you do need to reassign the variable use let, otherwise, use const.



const entree = 'Enchiladas';
console.log(entree);    // Enchiladas
// entree = 'Tacos';        // TypeError: Assignment to constant variable.
// const testing;          // SyntaxError: Missing initializer in const declaration



let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4


// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log('The value of levelUp:', levelUp);          // The value of levelUp: 15
console.log('The value of powerLevel:', powerLevel);    // The value of powerLevel: 8901
console.log('The value of multiplyMe:', multiplyMe);    // The value of multiplyMe: 352
console.log('The value of quarterMe:', quarterMe);      // The value of quarterMe: 288
