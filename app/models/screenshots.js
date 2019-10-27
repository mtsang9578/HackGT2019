let mongoose = require('mongoose');

let screenshotsSchema = mongoose.Schema({
    url: [String],
    //user: mongoose.Schema.Types.ObjectId,
    screenshotDate: Date,
    timestamp: {type: Date, default: Date.now()},
    description: String,
}, {collection:'screenshots'});


module.exports = mongoose.model('screenshots', screenshotsSchema);