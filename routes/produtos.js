const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Produto = require('../models/produto');

const mongoose = require('mongoose');


// Adiciona
router.post('/adiciona', (req, res, next) => {
  let newProduto = new Produto({
    tipoProduto: req.body.tipoProduto,
    nomeProduto: req.body.nomeProduto,
    descricaoProduto: req.body.descricaoProduto,
    codigoProduto: req.body.codigoProduto,
    linhaProduto: req.body.linhaProduto,
    medicaoProduto: req.body.medicaoProduto,
    capaProduto: req.body.capaProduto,
    compProduto: req.body.compProduto,
    largProduto: req.body.largProduto,
    espProduto: req.body.espProduto,
    unidCx: req.body.unidCx,
    cxPallet: req.body.cxPallet,
    metroCx: req.body.metroCx,
    metroPallet: req.body.metroPallet,
    precos: req.body.precos,
  });

  Produto.addProduto(newProduto, (err, produto) => {
    if(err){
      res.json({success: false, msg: 'Não foi possível cadastrar o Produto'});
    } else {
      res.json({success: true, msg: 'Produto Cadastrado com Sucesso!'});
    }
  });
});


// Consulta
router.get('/consulta', (req, res) => {
    Produto.find({}, function(err, produtos){
        res.json(produtos);
    });
});


// Modifica
router.post('/modifica', (req, res, next) => {
  let newProduto = new Produto({
    _id: req.body._id,
    tipoProduto: req.body.tipoProduto,
    nomeProduto: req.body.nomeProduto,
    descricaoProduto: req.body.descricaoProduto,
    codigoProduto: req.body.codigoProduto,
    linhaProduto: req.body.linhaProduto,
    medicaoProduto: req.body.medicaoProduto,
    capaProduto: req.body.capaProduto,
    compProduto: req.body.compProduto,
    largProduto: req.body.largProduto,
    espProduto: req.body.espProduto,
    unidCx: req.body.unidCx,
    cxPallet: req.body.cxPallet,
    metroCx: req.body.metroCx,
    metroPallet: req.body.metroPallet,
    precos: req.body.precos,
    descontos: req.body.descontos,
  });
  Produto.findByIdAndUpdate(newProduto._id, {$set: newProduto}, (err, produto) => {
      if(err){
        res.json({success: false});
      }
      else {
        res.json({success: true, msg: 'Dados Alterados com Sucesso!', produto});
      }
  })
});


// Modifica Desconto
router.post('/desconto', (req, res, next) => {
    if (req.body.select_field == "nomeProduto"){
      query = { 'nomeProduto' : req.body.select_desc };
    }
    if (req.body.select_field == "tipoProduto"){
      query = { 'tipoProduto' : req.body.select_desc };
    }
    if (req.body.select_field == "linhaProduto"){
      query = { 'linhaProduto' : req.body.select_desc };
    }
    let Desconto = {
      descontos: req.body.descontos
    }
    Produto.updateMany(query, Desconto, function (err, produto) {
      if(err){
        console.log(err);
        res.json({success: false});
      } else {
        res.json({success: true, msg: 'Dados Alterados com Sucesso!', produto});
      }
    })
});


// Modifica Estoque
router.post('/estoque', (req, res, next) => {
    let Estoque = {
      quantEstoque: req.body.quantEstoque,
      medidaEstoque: req.body.medidaEstoque,
    }
    Produto.updateMany({ '_id' : req.body._id }, Estoque, function (err, produto) {
      if(err){
        console.log(err);
        res.json({success: false});
      } else {
        res.json({success: true, msg: 'Dados Alterados com Sucesso!', produto});
      }
    })
});


module.exports = router;