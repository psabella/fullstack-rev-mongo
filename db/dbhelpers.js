var Todo = require('./');

var helpers = {
  // add your queries here
  // find for read - if pass in empty obj, then will find all
  // sorting 1 = ascending, -1 = descending
  get: () => Todo.find({}).sort({ priority: 1}).limit(5),
  post: (item) => Todo.create(item),
  put: (_id, priority) => Todo.findOneAndUpdate({_id}, priority),
  delete: (_id) => Todo.deleteOne({ _id })
};

module.exports = helpers;