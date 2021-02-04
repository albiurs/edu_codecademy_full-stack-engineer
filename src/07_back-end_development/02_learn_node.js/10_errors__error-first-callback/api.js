module.exports = {

    /**
     * errorProneAsyncApi()
     *
     * An error-first callback
     *
     * Now take a look at 03_app.js. Here we wrote an error-first callback function. This callback does the error handling so
     * there’s no need for a try...catch statement. This is how most Node asynchronous APIs are set up to handle errors.
     * In 03_app.js we require in the api.js module. This time, we’ll use an asynchronous method, api.errorProneAsyncApi(),
     * designed to work like the asynchronous methods in Node.
     *
     * At the bottom of 03_app.js, invoke the api.errorProneAsyncApi() method with 'problematic input' as the first argument
     * and the error-first callback as the second.
     *
     * @param input
     * @param callback
     */
    errorProneAsyncApi: (input, callback) => {
        console.log(`Running errorProneAsyncApi with input: ${input}...\n`)
        setTimeout(() => {
            let myErr = undefined;
            if (input === 'problematic input') {
                myErr = new Error('whoops');
                callback(myErr);
            } else {
                let responseData = `Received valid input "${input}"`;
                callback(myErr, responseData);
            }
        }, 2000);
    },


    /**
     * In order to understand why Node uses error-first callbacks in many of its asynchronous APIs, let’s demonstrate
     * that traditional try...catch statements won’t work for errors thrown during asynchronous operations.
     *
     * In 02_naiveAsyncErr.js, we require in the local api.js module which contains the api.naiveErrorProneAsyncFunction()
     * method. This asynchronous method throws an error whenever it is passed the input 'problematic input'. We would
     * want the try...catch statement in 02_naiveAsyncErr.js to catch this error, but it cannot since the error is thrown
     * asynchronously.
     *
     * In the terminal, execute the 02_naiveAsyncErr.js file. You’ll see that the intended output,
     * 'Something went wrong. ${err}\n', wasn’t logged — meaning that the error was never caught.
     *
     * @param input
     * @param callback
     */
    naiveErrorProneAsyncFunction: (input, callback) => {
        console.log(`Running naiveErrorProneAsyncFunction with input: ${input}...\n`);
        setTimeout(() => {
            if (input === 'problematic input') {
                throw new Error('whoops');
            } else {
                let responseData = `Received valid input "${input}"`;
                callback(responseData);
            }
        }, 2000);
    }

}



