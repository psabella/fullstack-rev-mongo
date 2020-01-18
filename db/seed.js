const mongoose = require('mongoose');
const Todo = require('./');
const seedData = require('../data/todos.json');

// Fill in the definition of insertSeedData so that when 
// this file is run in the terminal the mock data is inserted
var insertSeedData = function() {
  // create will take either an object or an array of objects

};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertSeedData();