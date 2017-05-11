const mongoose = require('mongoose');
const config = require('../config/database');

// Telefone Schema
const TelefoneSchema = mongoose.Schema({
  idCliente: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  contato_tel: {
    type: String,
    required: false
  },
  operadora: {
    type: String,
    required: false
  }
});

const Telefone = module.exports = mongoose.model('Telefone', TelefoneSchema);

module.exports.addTelefone = function(newTelefone, callback){
    newTelefone.save(callback);
}

module.exports.deleteTelefone = function(cliente, callback){
    const query = {cliente:cliente}
    Telefone.delete(query, callback);
}