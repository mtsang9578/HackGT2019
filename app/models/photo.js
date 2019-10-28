var mongoose = require('mongoose');

var photoSchema = mongoose.Schema({

	img: 
      { data: Buffer, contentType: String }

});

module.exports = mongoose.model('Photo', photoSchema);