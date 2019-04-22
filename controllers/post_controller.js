const Post = require('../models/post_model');

exports.serve_main = function(req, res){
	Post.find({}, (err, posts) => {
		res.render('index', {posts: posts});
	})
};

exports.serve_blog_post = function(req,res){
	
	Post.findById(req.param("post_id"), (err,blog_post) => {
		res.render('blog_post', {blog_post: blog_post});
	})

	console.log("post id is: " + req.param("post_id"));
	
}

exports.post_create = function(req, res){
	if(req.body.title == "" || req.body.body_content == ""){
		res.redirect('/');
	}
	else{
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
	}

};

exports.post_update = function(req, res){
	Post.findByIdAndUpdate({id: req.body.id}, {body_content: req.body_content},
		function(err){
			if(err) return next(err);
			res.redirect('/');
			console.log('update successful');
		})
}

exports.post_delete = function(req, res){

	//Post.deleteOne({id: req.body.post_id}, function(err){
	Post.deleteOne({title: req.body.title_p}, function(err){
		if(err) return next(err);
		res.redirect('/');
		console.log('delete successful');
	});
};