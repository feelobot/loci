// The Post model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var wordsSchema = new Schema({
    createdAt: {
      type: Date, 
      default: Date.now
    },
    word: {
      type: String, 
      validate: [required, 'Word Can Not Be Blank'],
    }
});
 
module.exports = mongoose.model('Word', wordsSchema);