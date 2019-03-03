var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    container: {type: String, required: true, max: 100},
    value: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);