var express = require('express');
var app = express();
var assert = require('assert');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://safayar:mongoadmin@cluster0-shard-00-00-17g43.mongodb.net:27017,cluster0-shard-00-01-17g43.mongodb.net:27017,cluster0-shard-00-02-17g43.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&authSource=admin&ssl=true";
MongoClient.connect(uri, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  db.close();
});