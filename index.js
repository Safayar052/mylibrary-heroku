var express = require('express');
var app = express();
var assert = require('assert');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var MongoClient = require('mongodb').MongoClient;

// load mongoose package
var mongoose = require('mongoose');

// Use native Node promises
mongoose.Promise = global.Promise;

var uri = "mongodb://safayar:mongoadmin@cluster0-shard-00-00-17g43.mongodb.net:27017,cluster0-shard-00-01-17g43.mongodb.net:27017,cluster0-shard-00-02-17g43.mongodb.net:27017/library?replicaSet=Cluster0-shard-0&authSource=admin&ssl=true";

// connect to MongoDB
mongoose.connect(uri)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var str;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/*
app.get('/', function(request, response) {
  response.render('pages/index');
});
*/
var routes = require('./routes/index');
app.use('/', routes);

var books = require('./routes/books');
app.use('/books', books);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;