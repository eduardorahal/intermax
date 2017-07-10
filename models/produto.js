const mongoose = require('mongoose');
const config = require('../config/database');


// Produto Schema
const ProdutoSchema = mongoose.Schema({
  tipoProduto:  {
    type: String,
    required: true
  },
  nomeProduto:  {
    type: String,
    required: true
  },
  descricaoProduto:  {
    type: String,
    required: true
  },
  codigoProduto:  {
    type: String,
    required: true
  },
  linhaProduto:  {
    type: String,
    required: true
  },
  medicaoProduto:  {
    type: String,
    required: true
  },
  capaProduto:  {
    type: String,
    required: false
  },
  compProduto:  {
    type: String,
    required: true
  },
  largProduto:  {
    type: String,
    required: true
  },
  espProduto:  {
    type: String,
    required: true
  },
  unidCx:  {
    type: String,
    required: true
  },
  cxPallet:  {
    type: String,
    required: true
  },
  metroCx:  {
    type: String,
    required: true
  },
  metroPallet:  {
    type: String,
    required: true
  },
  precos:[{
    centro:   {
      type: String,
      required: false
    },
    categoria:   {
      type: String,
      required: false
    },
    preco:   {
      type: String,
      required: false
    },
    desc1:   {
      type: String,
      required: false
    },
    desc2:   {
      type: String,
      required: false
    },
    desc3:   {
      type: String,
      required: false
    },
    desc4:   {
      type: String,
      required: false
    }
  }],
  descontos:[{
    tipo:   {
      type: String,
      required: false
    },
    quant:   {
      type: String,
      required: false
    },
    medida:   {
      type: String,
      required: false
    }
  }],
  quantEstoque:  {
    type: String,
    required: false
  },
  medidaEstoque:  {
    type: String,
    required: false
  },
});

const Produto = module.exports = mongoose.model('Produto', ProdutoSchema);

module.exports.getProdutoById = function(id, callback){
  Produto.findOne(id, callback);
}

module.exports.getProdutoByDescricao = function(descricaoProduto, callback){
  const query = {descricaoProduto:descricaoProduto};
  Produto.findOne(query, callback);
}

module.exports.addProduto = function(newProduto, callback){
    newProduto.save(callback);
}

module.exports.deleteProduto = function(id, callback){
    const query = {id:id}
    Produto.delete(query, callback);
}