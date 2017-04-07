var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Book = require('../models/Book.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ngTodo' });
});

/* Search all unique genre */
router.get('/uniquegenre', function(req, res, next) {
  Book.distinct('genre', function (err, post) {
    if (err) {
		console.log(post);
		return next(err);
	} 
    res.json(post);
  });
});

module.exports = router;