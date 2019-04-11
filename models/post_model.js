var mongoose = require('mongoose');
post Schema = mongoose.Schema;

let PostSchema = new Schema({
	title: {type: String},
	body_content: {type: String}
});

module.exports = mongoose.model('Post', PostSchema);