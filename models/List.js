// The Post model
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId,
   validate = require('mongoose-validator').validate;;
 
var textValidator = validate({message: "String should be between 3 and 20 characters"}, 'len', 3, 20)
var listSchema = new Schema({
    text: { type: String, require: true, validate: textValidator },
    size: { type: Number }
});
 
module.exports = mongoose.model('List', listSchema);