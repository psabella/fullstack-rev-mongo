var mongoose = require('mongoose');
var todoSchema = require('./schema.js');
var mongoURI = 'mongodb://localhost/review';
// allow use of es6 promises <-- THIS RIGHT HERE!!!!!! PROMISES PROMISES!!!!
mongoose.Promise = global.Promise;

// Connect Mongoose to our local MongoDB via URI specified above
var db = mongoose.connect(mongoURI)
  .then(() => console.log('Connected to mongoDB'))

// define the model (an interface to interact with the db)
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;