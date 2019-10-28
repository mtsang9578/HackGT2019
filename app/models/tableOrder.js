var mongoose = require('mongoose');
var Order       = require('./order');

var tableOrderSchema = mongoose.Schema({

	tableNumber: Number,
	orders: [Order.schema]

});

module.exports = mongoose.model('TableOrder', tableOrderSchema);