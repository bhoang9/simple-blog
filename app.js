var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + "/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

