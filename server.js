var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/', express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

http.listen(3000, function() {
	console.log('Server started on port 3000')
});