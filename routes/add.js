
var Word = require('../models/words.js');

exports.add = function(req, res) {
    new Word({ word: req.body.word }).save();
    res.redirect('/');
}