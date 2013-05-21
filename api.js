/* The API controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/
 
 
var List = require('./models/List.js');

exports.add = function(req, res, err) {
    List.update({text: req.body.word}, {text: req.body.word, $inc: { size: 1 }}, {upsert: true}, function(){
      console.log("Added " + req.body.word + " to list")
    })
    res.redirect('/');
}

exports.show = function(req, res) {
  List.find(function(err, list) {
    res.send(list);
  });
};