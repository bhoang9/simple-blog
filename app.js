var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var post = require('./routes/post_route');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + "/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', post);

mongoose.connect("mongodb://localhost:27017/simple-blog");

app.listen(3000, () => {
	console.log('Server listening on 3000');
});

