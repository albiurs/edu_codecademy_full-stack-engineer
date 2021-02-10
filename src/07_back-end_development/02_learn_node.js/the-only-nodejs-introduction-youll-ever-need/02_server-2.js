// 02_server-2.js
// We could also let Node do some of the work for us.
const http = require('http'),
    server = http.createServer((request,response)=>{
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('Hello world');
        response.end();
    });
server.listen(3000,()=>{
    console.log('Node server created at port 3000');
});

// Here, we just pass a callback to the createServer(), Node adds the requestevent handler for us. We are only concerned
// with the requestand response object at this point.
//
// We use the response.writeHead()to attach some headers to the server’s response (status code and content type),
// response.write()writes to the web page. Then we use the response.end()to close the response to the server.
//
// Lastly, we tell the server to listen at a port (3000). So we can at least see a demo of our web app while developing
// on our local machines. (localhost:3000). The listen method takes a callback as second argument. This callback fires
// immediately the server is started.
