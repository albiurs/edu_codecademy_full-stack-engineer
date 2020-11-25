// Functions as Parameters
//
// Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that we
// can also pass functions (into other functions) as parameters. A
// higher-order function
// is a function that either accepts functions as parameters, returns a function, or both! We call the functions that
// get passed in as parameters and invoked
// callback functions
// because they get called during the execution of the higher-order function.
//
// When we pass a function in as an argument to another function, we don’t invoke it. Invoking the function would
// evaluate to the return value of that function call. With
// callbacks, we pass in the function itself by typing the function name without the parentheses
// (that would evaluate to the result of calling the function):

const timeFuncRuntime0 = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime0(addOneToOne);   // pass the callback function without () parenthesis

// We wrote a
// higher-order function, timeFuncRuntime().
// It takes in a function as an argument, saves a starting time, invokes the callback function,
// records the time after the function was called, and returns the time the function took to run by subtracting the
// starting time from the ending time.
//
// This higher-order function could be used with any
// callback function
// which makes it a potentially powerful piece of code.
//
// We then invoked timeFuncRuntime() first with the addOneToOne() function
// - note how we passed in addOneToOne and did not invoke it.

timeFuncRuntime0(() => {
    for (let i = 10; i>0; i--){
        console.log(i);
    }
});

// In this example, we invoked timeFuncRuntime() with an
// anonymous function
// that counts backwards from 10.
// Anonymous functions can be arguments too!
//
// Let’s get some practice using functions and writing higher-order functions.



const checkThatTwoPlusTwoEqualsFourABillionTimes = () => {
    for(let i = 1; i <= 1_000_000_000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

const is2p2 = checkThatTwoPlusTwoEqualsFourABillionTimes;

const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};

const time2p2 = timeFuncRuntime(is2p2);    // call without () parenthesis
console.log('Time to run is2p2 = ' + time2p2 + ' ms');



const checkConsistentOutput = (func, value) => {
    let firstTry = func(value);
    let secondTry = func(value);

    if(firstTry === secondTry) {
        return firstTry;
    } else {
        return 'This function returned inconsistent results';
    }
}

const addTwo = num => num + 2;
const isConsistent = checkConsistentOutput(addTwo, 3);
console.log('Double calc of addTwo(3) results in: ' + isConsistent);





const _ = {

    /**
     * _.findKes()
     * https://lodash.com/docs/4.17.15#findKey
     * @param object
     * @param predicateFunc
     * @returns {string|undefined}
     */
    findKey(object, predicateFunc) {
        let match = '';
        for(let prop in object) {
            if(predicateFunc(object[prop])) {
                match = prop;
                return match;
            }
        }
        return undefined;
    }
}

let users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
};

// conventional predicate function (= returns true or false)
console.log(_.findKey(users, function(o) { return o.age < 40; }));  // => 'barney'
console.log(_.findKey(users, function(o) { return o.age === 40; }));  // => 'fred'
console.log(_.findKey(users, function(o) { return o.age < 0; }));  // => 'undefined'

// predicate arrow function (= returns true or false)
console.log(_.findKey(users, (o) => o.age < 40));  // => 'barney'
console.log(_.findKey(users, (o) => o.age === 40));  // => 'fred'
console.log(_.findKey(users, (o) => o.age < 0));  // => 'undefined'
