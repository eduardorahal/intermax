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
  metroContainer:  {
    type: String,
    required: false
  },
  preco_rev_cd1:   {
    type: String,
    required: false
  },
  desc1_rev_cd1:   {
    type: String,
    required: false
  },
  desc2_rev_cd1:   {
    type: String,
    required: false
  },
  desc3_rev_cd1:   {
    type: String,
    required: false
  },
  desc4_rev_cd1:   {
    type: String,
    required: false
  },
  preco_rev_cd3:   {
    type: String,
    required: false
  },
  desc1_rev_cd3:   {
    type: String,
    required: false
  },
  desc2_rev_cd3:   {
    type: String,
    required: false
  },
  desc3_rev_cd3:   {
    type: String,
    required: false
  },
  desc4_rev_cd3:   {
    type: String,
    required: false
  },
  preco_eng_cd1:   {
    type: String,
    required: false
  },
  desc1_eng_cd1:   {
    type: String,
    required: false
  },
  desc2_eng_cd1:   {
    type: String,
    required: false
  },
  desc3_eng_cd1:   {
    type: String,
    required: false
  },
  desc4_eng_cd1:   {
    type: String,
    required: false
  },
  preco_eng_cd3:   {
    type: String,
    required: false
  },
  desc1_eng_cd3:   {
    type: String,
    required: false
  },
  desc2_eng_cd3:   {
    type: String,
    required: false
  },
  desc3_eng_cd3:   {
    type: String,
    required: false
  },
  desc4_eng_cd3:   {
    type: String,
    required: false
  },
  preco_hcka_cd1:   {
    type: String,
    required: false
  },
  desc1_hcka_cd1:   {
    type: String,
    required: false
  },
  desc2_hcka_cd1:   {
    type: String,
    required: false
  },
  desc3_hcka_cd1:   {
    type: String,
    required: false
  },
  desc4_hcka_cd1:   {
    type: String,
    required: false
  },
  preco_hcka_cd3:   {
    type: String,
    required: false
  },
  desc1_hcka_cd3:   {
    type: String,
    required: false
  },
  desc2_hcka_cd3:   {
    type: String,
    required: false
  },
  desc3_hcka_cd3:   {
    type: String,
    required: false
  },
  desc4_hcka_cd3:   {
    type: String,
    required: false
  },
  preco_dist_cd1:   {
    type: String,
    required: false
  },
  desc1_dist_cd1:   {
    type: String,
    required: false
  },
  desc2_dist_cd1:   {
    type: String,
    required: false
  },
  desc3_dist_cd1:   {
    type: String,
    required: false
  },
  desc4_dist_cd1:   {
    type: String,
    required: false
  },
  preco_dist_cd3:   {
    type: String,
    required: false
  },
  desc1_dist_cd3:   {
    type: String,
    required: false
  },
  desc2_dist_cd3:   {
    type: String,
    required: false
  },
  desc3_dist_cd3:   {
    type: String,
    required: false
  },
  desc4_dist_cd3:   {
    type: String,
    required: false
  },
  quant_desc1:   {
    type: String,
    required: false
  },
  medida_desc1:   {
    type: String,
    required: false
  },
  quant_desc2:   {
    type: String,
    required: false
  },
  medida_desc2:   {
    type: String,
    required: false
  },
  quant_desc3:   {
    type: String,
    required: false
  },
  medida_desc3:   {
    type: String,
    required: false
  },
  quant_desc4:   {
    type: String,
    required: false
  },
  medida_desc4:   {
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