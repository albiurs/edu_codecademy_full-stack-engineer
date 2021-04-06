/**
 * Function.prototype.bind()
 *
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 *
 * @type {{getX: (function(): number), x: number}}
 */


const testBindModule = {
    x: 42,
    getX: function() {
        return this.x;
    }
};


console.log(testBindModule.getX()); // direct access of the function getX()
// expected output: 42

const getXFunc = testBindModule.getX();  // assign function to the constant
console.log(getXFunc);                   // invoke the function
// expected output: 42


// ...but...


const unboundGetX = testBindModule.getX;    // only the key name without the value, the function
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(testBindModule); // bind the object itself to the key
console.log(boundGetX());
// expected output: 42


