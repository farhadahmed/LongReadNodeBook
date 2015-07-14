var http = require("http");
var url = require('url');
//FINAL VERSION
function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;

//EIGHTH VERSION
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");

//     route(handle, pathname, response);
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// exports.start = start;



//SEVENTH VERSION (NOT A GOOD IDEA)
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     var content = route(handle, pathname)
//     response.write(content);
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// exports.start = start;



//SIXTH VERSION
// function start(route, handle) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");

//     route(handle, pathname);

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// exports.start = start;



//FIFTH VERSION (EXTENSION OF PREVIOUS)
// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");

//     route(pathname);

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// exports.start = start;



//FOURTH REFACTORED VERSION
// function start() {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }
// exports.start = start;



//THIRD REFACTORED VERSION
// function start() {
//   function onRequest(request, response) {
//     console.log("Request received.");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }

//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }

// exports.start = start;



//SECOND REFACTORED VERSION
// function onRequest(request, response) {
//   console.log("Request received.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }

// http.createServer(onRequest).listen(8888);

// console.log("Server has started.");



//FIRST REFACTORED VERSION
// function onRequest(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }

// http.createServer(onRequest).listen(8888);



//ORIGINAL VERSION
//http.createServer(function(request, response) {
//  response.writeHead(200, {"Content-type": "text/plain"});
//  response.write("Hello World");
//  response.end();
//}).listen(8888);
