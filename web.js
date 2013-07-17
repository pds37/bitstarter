var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buff = fs.readFileSync("index.html");
var string = buff.toString;


app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
