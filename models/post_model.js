var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let PostSchema = new Schema({
	title: {type: String},
	body_content: {type: String}
});

module.exports = mongoose.model('Post', PostSchema);