const api = require('./api.js');

// Not an error-first callback
let callbackFunc = (data) => {
    console.log(`Something went right. Data: ${data}\n`);
};


/*
In order to understand why Node uses error-first callbacks in many of its asynchronous APIs, let’s demonstrate that
traditional try...catch statements won’t work for errors thrown during asynchronous operations.

In 02_naiveAsyncErr.js, we require in the local api.js module which contains the api.naiveErrorProneAsyncFunction() method.
This asynchronous method throws an error whenever it is passed the input 'problematic input'. We would want the
try...catch statement in 02_naiveAsyncErr.js to catch this error, but it cannot since the error is thrown asynchronously.

In the terminal, execute the 02_naiveAsyncErr.js file. You’ll see that the intended output, Something went wrong. ${err}\n,
wasn’t logged— meaning that the error was never caught.
 */
try {
    api.naiveErrorProneAsyncFunction('problematic input', callbackFunc);
} catch(err) {
    console.log(`Something went wrong. ${err}\n`);  // will not be caught on error
}

