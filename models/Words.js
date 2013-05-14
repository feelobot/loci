// The Post model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
 
var wordsSchema = new Schema({
    createdAt: {
      type: Date, 
      default: Date.now
    },
    word: {type: String, trim: true, required: true}
});

wordsSchema.methods.list = function () {
  console.log(this.word)
}

wordsSchema.methods.speak = function () {
  console.log(this.word);
}

 
module.exports = mongoose.model('Word', wordsSchema);