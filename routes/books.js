var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');
/* GET /books listing. */
router.get('/', function(req, res, next) {
  Book.find(function (err, books) {
    if (err) return next(err);
    res.json(books);
  });
});

/* GET /booksbygenre/:genre */
/*router.get('/genre/:genre', function(req, res, next) {
   Book
  .where('genre').eq(req.params.genre)
  .exec(function (err, post) {	  
	console.log(req.params.genre);
    if (err) return next(err);
    res.json(post);
  });
});*/

/* POST /books */
router.post('/', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* GET /books/id */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* PUT /books/:id */
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* DELETE /books/:id */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;