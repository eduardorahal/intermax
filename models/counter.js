const mongoose = require('mongoose');
const config = require('../config/database');


// Counter Schema
const CounterSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    required: true
  }
});


const Counter = module.exports = mongoose.model('Counter', CounterSchema);