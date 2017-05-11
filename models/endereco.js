const mongoose = require('mongoose');
const config = require('../config/database');

// Endereço Schema
const EnderecoSchema = mongoose.Schema({
  idCliente: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: false
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: false
  }
});

const Endereco = module.exports = mongoose.model('Endereco', EnderecoSchema);

module.exports.addEndereco = function(newEndereco, callback){
    newEndereco.save(callback);
}

module.exports.deleteEndereco = function(cliente, callback){
    const query = {cliente:cliente}
    Endereco.delete(query, callback);
}