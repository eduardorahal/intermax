const mongoose = require('mongoose');
const config = require('../config/database');



// Cliente Schema
const RepresentanteSchema = mongoose.Schema({
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
  contato: {
    type: String,
    required: false
  },
  insc_estadual: {
    type: String,
    required: false
  },
  removed: {
    type: Boolean,
    required: false
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
  },
  regioes: [{
    _id: {
      type: Number,
      required: true
    },
    nome: {
      type: String,
      required: true
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
  categorias: [{
    categoria: {
      type: String,
      required: false
    }
  }]
});


const Representante = module.exports = mongoose.model('Representante', RepresentanteSchema);


module.exports.addRepresentante = function(Representante, callback){
    Representante.save(callback);
}
