// The Post model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var wordsSchema = new Schema({
    createdAt: {
      type: Date, 
      default: Date.now
    },
    word: { type: String, trim: true, required: true }
});

/*
wordsSchema.pre('save', function (next) {
  var err = new Error('something went wrong');
  next(err);
});
*/
 
module.exports = mongoose.model('Word', wordsSchema);