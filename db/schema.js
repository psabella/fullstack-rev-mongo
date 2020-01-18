var mongoose = require('mongoose');

// define the schema
var todoSchema = mongoose.Schema ({
  name: {type: String},
  priority: {type: String}
});

module.exports = todoSchema;