var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	user: User,
	description: String,
	date: Date,
	stars: Number
});

var itemSchema = mongoose.Schema({

	comments: commentSchema[], //may need to be [commentSchema]
	price: Number,
	pictureId: Number,//Or Img model
	details: String

});

module.exports = mongoose.model('Item', itemSchema);