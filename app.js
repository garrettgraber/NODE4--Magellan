var express = require('express');
var bodyParser = require('body-parser');
var controller = require('./controller/controller.js');
var sites = require('./model/site.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', controller.indexRoute);

app.get('/previous', controller.previous);

app.get('/next', controller.next);

var server = app.listen(5731, function() {
	console.log('Express server listening on port ' + server.address().port);
});
