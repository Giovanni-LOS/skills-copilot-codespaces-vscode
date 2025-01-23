// Create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

// Load comments
var comments = require('./comments.json');

// Get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Add a comment
app.post('/comments', function(req, res) {
  var newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Start server
var server = app.listen(3000, function() {
  console.log('Server listening on port 3000');
});