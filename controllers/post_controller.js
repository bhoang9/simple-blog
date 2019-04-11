const Post = require('../models/post_model');

exports.serve_main = function(req, res){
	Post.find({}, (err, posts) => {
		res.render('index', {posts: posts});
	})
}

exports.post_create = function(req, res){
	let post = new Post({
		title: req.body.title,
		body_content: req.body.body_content

	});
}