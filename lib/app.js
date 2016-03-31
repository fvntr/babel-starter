'use strict'; 

var express = require('express'); 
var app = express(); 

var server = require('http').createServer(app); 

app.use('/', express.static(_dirname + '/../dist'));

server.listen(8000, () => console.log('App has started'));