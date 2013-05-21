
/*
 * GET home page.
 */
var List = require('../models/List.js');

exports.index = function(req, res) {
  List.find().select("text size -_id").exec(function(err, words) {
    console.log(words);
    res.render('index', { 
      title: 'LOCI',
      list: words
    });
  })
}