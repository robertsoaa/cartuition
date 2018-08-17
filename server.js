//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');

var app = express(); 
var PORT = process.env.PORT || 3000;

//bodyParser added to make server understand data that is sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//points are server to our route files
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//starts our server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});