// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

// In app.js, we’ve required in the events core module and written a function listenerCallback which expects to be
// passed data and will log a string to the console which incorporates that data. Now it’s time to create an event
// emitter. Create a new variable, myEmitter and assign as its value a new instance of the event emitter class.
let myEmitter = new events.EventEmitter();

// Invoke myEmitter‘s .on() method passing in 'celebration' as the event name and listenerCallback as the listener
// callback function.
myEmitter.on('celebration', listenerCallback);

// Let’s emit a 'celebration' event! Invoke myEmitter‘s .emit() method passing in 'celebration' as the event name and a
// string of your choice as the second argument.
myEmitter.emit('celebration', 'your birthday!');
