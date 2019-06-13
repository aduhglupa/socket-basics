var express = require('express');
var http = require('http');

var app = express();
var PORT = process.env.PORT || 3000;

http = http.Server(app);
app.use(express.static(__dirname + '/public'));

http.listen(PORT, function () {
    console.log('Server started!');
})