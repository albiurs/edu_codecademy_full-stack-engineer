const api = require('./api.js');

/**
 * errorFirstCallback()
 *
 * An error-first callback
 *
 * Now take a look at 03_app.js. Here we wrote an error-first callback function. This callback does the error handling so
 * there’s no need for a try...catch statement. This is how most Node asynchronous APIs are set up to handle errors.
 * In 03_app.js we require in the api.js module. This time, we’ll use an asynchronous method, api.errorProneAsyncApi(),
 * designed to work like the asynchronous methods in Node.
 *
 * At the botton of 03_app.js, invoke the api.errorProneAsyncApi() method with 'problematic input' as the first argument
 * and the error-first callback as the second.
 *
 * @param err
 * @param data
 */
let errorFirstCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong. ${err}\n`);
    } else {
        console.log(`Something went right. Data: ${data}\n`);
    }
};

api.errorProneAsyncApi('valid input', errorFirstCallback);
api.errorProneAsyncApi('problematic input', errorFirstCallback);

