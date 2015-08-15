var express = require('express');
var app = express();

app.use('/', express.static('public'));

app.get('/', function(req, res) {
	res.sendFile('./public/index.html');
});

app.listen(3000, function() {
	console.log('Server started on port 3000')
});