const mongoose = require('mongoose');
const config = require('../config/database');



// Cliente Schema
const ClienteSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  cnpj: {
    type: String,
    required: false
  },
  razao: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  contato: {
    type: String,
    required: false
  },
  insc_estadual: {
    type: String,
    required: false
  },
  regiao: {
    type: String,
    required: true
  },
  removed: {
    type: Boolean,
    required: false
  },
  enderecos: [{
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
  }],
  telefones: [{
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
  }],
  cpfs: [{
    cpf: {
      type: String,
      required: false
    },
    nome_cpf: {
      type: String,
      required: false
    }
  }]
});


const Cliente = module.exports = mongoose.model('Cliente', ClienteSchema);




module.exports.getClienteById = function(id, callback){
  Cliente.findOne(id, callback);
}

module.exports.getCliente = function(data, callback){
  const query = "{$or[{razao:data},{cnpj:data},{cpf:data}]}";
  Cliente.findOne(query, callback);
}

module.exports.addCliente = function(Cliente, callback){
    Cliente.save(callback);
}

module.exports.deleteCliente = function(id, callback){
    const query = {id:id}
    Cliente.delete(query, callback);
}