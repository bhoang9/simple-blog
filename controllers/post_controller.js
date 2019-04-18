const Post = require('../models/post_model');

exports.serve_main = function(req, res){
	Post.find({}, (err, posts) => {
		res.render('index', {posts: posts});
	})
};

exports.serve_blog_post = function(req,res){
	res.render('blog_post');
}

exports.post_create = function(req, res){
	let post = new Post({
		title: req.body.title,
		body_content: req.body.body_content
	});
	console.log("post create has been executed");
	post.save().then( result => {
		res.redirect('/');
	}).catch(err => {
		res.status(400).send("Unable to save data");
	});
};

exports.post_delete = function(req, res){
	//var post_title = document.getElementById('1st post').value;
	
	Post.deleteOne({title: req.body.title_p}, function(err){
		if(err) return next(err);
		res.redirect('/');
		console.log('delete successful');
	});
	
	//console.log(req.body.title_p + "title here");
	//console.log(req.body.body_content + " body here");
	//console.log("anybody home?!?!?!");
};