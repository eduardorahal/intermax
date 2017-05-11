const mongoose = require('mongoose');
const config = require('../config/database');



// Cliente Schema
const RegiaoSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  removed: {
    type: Boolean,
    required: false
  },
  locais: [{
    estado: {
      type: String,
      required: true
    },
    cidade: {
      type: String,
      required: true
    }
  }]
});


const Regiao = module.exports = mongoose.model('Regiao', RegiaoSchema);


module.exports.addRegiao = function(Regiao, callback){
    Regiao.save(callback);
}
