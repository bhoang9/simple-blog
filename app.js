var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var post = require('./routes/post_route');
var method_override = require('method-override');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + "/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(method_override('_method'));
app.use('/', post);

mongoose.connect("mongodb://localhost:27017/simple-blog");

app.listen(3000, () => {
	console.log('Server listening on 3000');
});

