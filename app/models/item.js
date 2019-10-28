var mongoose = require('mongoose');
var User       = require('./user');
var Photo = require('./photo');

var commentSchema = mongoose.Schema({
	user: User.schema,
	description: String,
	date: Date,
	stars: Number
});

var itemSchema = mongoose.Schema({

	itemName: String,
	comments: [commentSchema], //may need to be [commentSchema]
	price: Number,
	picture: Photo.schema,//Or Img model
	details: String

});

module.exports = mongoose.model('Item', itemSchema);