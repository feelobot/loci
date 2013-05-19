
/*
 * GET home page.
 */
var Word = require('../models/words.js');
var word_list = new Array();

exports.index = function(req, res) {
  Word.find(function(err, words) {
    //console.log(words[0]);
    var list = words[0];
    Object.keys(words).forEach(function(word) {
      var val = words[word];
      word_list.push(val.word);
    }); 
    console.log(word_list)
    //res.send(word_list);
  })
  res.render('index', { 
    title: 'Loci',
    list: word_list
  });
  
}