const Post = require('../models/post_model');

exports.serve_main = function(req, res){
	Post.find({}, (err, posts) => {
		res.render('index', {posts: posts});
	})
};

exports.post_create = function(req, res){
	let post = new Post({
		title: req.body.title,
		body_content: req.body.body_content
	});

	post.save().then( result => {
		res.redirect('/');
	}).catch(err => {
		res.status(400).send("Unable to save data");
	});
};

exports.post_delete = function(req, res){
	/*
	Post.deleteOne({title: req.body.title}, function(err){
		if(err) return next(err);
		res.send('Delete successful');
		console.log('delete successful');
	});
	*/
	console.log(req.body.title + "/n");
	console.log(req.body.body_content);
	console.log("anybody home?!?!?!");
};