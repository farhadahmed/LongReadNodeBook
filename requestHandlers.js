var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response) {
  console.log("Request handler 'start' was called.");

  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" ' +
    'content="text/html; charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" enctype=multipart/form-data" ' +
    'method="post">' +
    '<input type="file" name="upload" multipart="multiple>' +
    '<input type="submit" value="Upload file" />' +
    '</form>' +
    '</body>' +
    '</html>';

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(body);
    response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  var form = new formidable.IncomingForm();
  console.log('about to parse...');
  form.parse(request, function(error, fields, files) {
    console.log('parsing done');

    /* Possible error on Windows systems:
       tried to rename to an already existing file */
    fs.rename(files.upload.path, './tmp/test.png', function(error) {
      if (error) {
        fs.unlink('./tmp/test.png');
        fs.rename(files.upload.path, './tmp/test.png');
      }
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('received image: <br/>');
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response) {
  console.log('Request handler "show" was called.');
  response.writeHead(200, {'Content-Type': 'image/png'});
  fs.createReadStream('./tmp/test.png').pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;



//FOURTH VERSION
// var exec = require("child_process").exec;

// function start(response) {
//   console.log("Request handler 'start' was called.");

//   exec("find /",
//     { timeout: 10000, maxBuffer: 20000*1024 },
//     function (error, stdout, stderr) {
//       response.writeHead(200, {"Content-Type": "text/plain"});
//       response.write(stdout);
//       response.end();
//     });
// }

// function upload(response) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello Upload");
//   response.end();
// }

// exports.start = start;
// exports.upload = upload;



//THIRD VERSION
// var exec = require("child_process").exec;

// function start(response) {
//   console.log("Request handler 'start' was called.");

//   exec("is -lah", function (error, stdout, stderr) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write(stdout);
//     response.end();
//   });
// }

// function upload(response) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello Upload");
//   response.end();
// }

// exports.start = start;
// exports.upload = upload;



//SECOND VERSION
// var exec = require("child_process").exec;

// function start() {
//   console.log("Request handler 'start' was called.");
//   var content = "empty";

//   exec("is -lah", function (error, stdout, stderr) {
//     content = stdout;
//   });

//   return content;
// }

// function upload() {
//   console.log("Request handler 'upload' was called.");
//   return "Hello Upload";
// }

// exports.start = start;
// exports.upload = upload;



//Not a good idea
// function start() {
//   console.log("Request handler 'start' was called.");
//   return "Hello Start";
// }

// function upload() {
//   console.log("Request handler 'upload' was called.");
//   return "Hello Upload";
// }

// exports.start = start;
// exports.upload = upload;


//ORIGINAL VERSION
// function start() {
//   console.log("Request handler 'start' was called.");
// }

// function upload() {
//   console.log("Request handler 'upload' was called.");
// }

// exports.start = start;
// exports.upload = upload;
