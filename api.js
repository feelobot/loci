/* The API controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/
 
 
var Word = require('./models/words.js');
var word_list = new Array()
exports.add = function(req, res) {
    var newWord = new Word({ word: req.body.word }).save()
    console.log('newWord')
    res.redirect('/');
}

exports.show = function(req, res) {
  Word
  .find(function(err, words) {
    //console.log(words[0]);
    var list = words[0];
    Object.keys(words).forEach(function(word) {
      var val = words[word];
      word_list.push(val.word);
    }); 
    res.send(word_list);
    //res.send(word_list);
  });
};
// first locates a thread by title, then locates the replies by thread ID.