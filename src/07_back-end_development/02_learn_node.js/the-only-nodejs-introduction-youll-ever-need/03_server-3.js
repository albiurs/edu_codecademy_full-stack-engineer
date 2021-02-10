// 03_server-3.js
//
const http = require('http'),

    makeServer = function (request,response){
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('Hello world');
        response.end();
    },

    server = http.createServer(makeServer);

server.listen(3000,()=>{
    console.log('Node server created at port 3000');
});

// makeServer here is a callback, since functions are first class objects in JavaScript, they can be passed into variables and then other functions.
//
// If you’re not used to JavaScript, you might need some time to get used to evented programming.
//
// If you start writing some serious JavaScript code, you might get into trouble with callback hell. Where your code becomes hard to read because there’re a lot of functions nested deeply. When this happens, you might want to find more advanced and efficient ways to replace callbacks. Look into promises, Eric Elliott wrote a guide to Mastering the JavaScript interview: What is a promise. It’s a nice place to get started.
