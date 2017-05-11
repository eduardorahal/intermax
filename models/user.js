const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  idEmpresa: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  acesso: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findOne(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username:username}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.hash(newUser.password, 10, (err, hash) => {
    if(err) throw err;
    newUser.password = hash;
    newUser.save(callback);
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
