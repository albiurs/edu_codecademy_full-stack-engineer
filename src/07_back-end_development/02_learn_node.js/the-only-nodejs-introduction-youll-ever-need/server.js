/*
The only NodeJs introduction you'll ever need.
 */
// https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219

//server.js
// const http = require('http'),
//     server = http.createServer();
//
// server.on('request',(request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.write('Hello world');
//     response.end();
// });
//
// server.listen(3000,()=>{
//     console.log('Node server created at port 3000');
// });




// 02_server-2.js
// We could also let Node do some of the work for us.
// const http = require('http'),
//     server = http.createServer((request,response)=>{
//         response.writeHead(200,{'Content-Type':'text/plain'});
//         response.write('Hello world');
//         response.end();
//     });
// server.listen(3000,()=>{
//     console.log('Node server created at port 3000');
// });




// Callbacks in Node
// 03_server-3.js
// with callback
// const http = require('http'),
//
//     makeServer = function (request,response){
//         response.writeHead(200,{'Content-Type':'text/plain'});
//         response.write('Hello world');
//         response.end();
//     },
//
//     server = http.createServer(makeServer);
//
// server.listen(3000,()=>{
//     console.log('Node server created at port 3000');
// });




// Routing with NodeJs
//
// we required another module; url. It provides us with an easy way to work with urls.
//
// The .parse()method takes a url as argument and breaks it into protocol , host path and querystring etc:
// https://www.website.com/about?name=Victor
// protocol://Host/Path/QueriyString
//
// So when we do url.parse(request.url).pathname , it gives us the pathname or the url which is primarily what we use
// to route requests. But things can get easier though.
// const http = require('http'),
//     url = require('url'),
//
//     makeServer = function (request,response){
//         let path = url.parse(request.url).pathname;
//         console.log(path);
//         if(path === '/'){
//             response.writeHead(200,{'Content-Type':'text/plain'});
//             response.write('Hello world');
//         }
//         else if(path === '/about'){
//             response.writeHead(200,{'Content-Type':'text/plain'});
//             response.write('About page');
//         }
//         else if(path === '/blog'){
//             response.writeHead(200,{'Content-Type':'text/plain'});
//             response.write('Blog page');
//         }
//         else{
//             response.writeHead(404,{'Content-Type':'text/plain'});
//             response.write('Error page');
//         }
//         response.end();
//     },
//     server = http.createServer(makeServer);
// server.listen(3000,()=>{
//     console.log('Node server created at port 3000');
// });




// Routing with Express
// Whenever you see a .use() method in express, it’s called a "middleware". Middlewares are functions that do some http
// heavy lifting for us. In the code, the middleware is an error handling one.
//server.js
const express = require('express'),
    server = express();

server.set('port', process.env.PORT || 3000);

//Basic routes
server.get('/', (request,response)=>{
    response.send('Home page');
});

server.get('/about',(request,response)=>{
    response.send('About page');
});

//Express error handling middleware

server.use((request,response)=>{
    response.type('text/plain');
    response.status(505);
    response.send('Error page');
});

//Binding to a port
server.listen(3000, ()=>{
    console.log('Express server started at port 3000');
});
