
var Word = require('../models/words.js');

exports.add = function(req, res) {
    new Word({ word: req.body.word }).save(function (err) {
      res.send(err)
    };
    res.redirect('/');
}