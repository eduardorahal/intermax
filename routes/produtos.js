const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Produto = require('../models/produto');

const mongoose = require('mongoose');


// Adiciona
router.post('/adiciona', (req, res, next) => {
  let newProduto = new Produto({
    tipoProduto: req.body.nomeProduto,
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
      metroContainer: req.body.metroContainer,
      preco_rev_cd1: req.body.preco_rev_cd1,
      desc1_rev_cd1: req.body.desc1_rev_cd1,
      desc2_rev_cd1: req.body.desc2_rev_cd1,
      desc3_rev_cd1: req.body.desc3_rev_cd1,
      desc4_rev_cd1: req.body.desc4_rev_cd1,
      preco_rev_cd3: req.body.preco_rev_cd3,
      desc1_rev_cd3: req.body.desc1_rev_cd3,
      desc2_rev_cd3: req.body.desc2_rev_cd3,
      desc3_rev_cd3: req.body.desc3_rev_cd3,
      desc4_rev_cd3: req.body.desc4_rev_cd3,
      preco_eng_cd1: req.body.preco_eng_cd1,
      desc1_eng_cd1: req.body.desc1_eng_cd1,
      desc2_eng_cd1: req.body.desc2_eng_cd1,
      desc3_eng_cd1: req.body.desc3_eng_cd1,
      desc4_eng_cd1: req.body.desc4_eng_cd1,
      preco_eng_cd3: req.body.preco_eng_cd3,
      desc1_eng_cd3: req.body.desc1_eng_cd3,
      desc2_eng_cd3: req.body.desc2_eng_cd3,
      desc3_eng_cd3: req.body.desc3_eng_cd3,
      desc4_eng_cd3: req.body.desc4_eng_cd3,
      preco_hcka_cd1: req.body.preco_hcka_cd1,
      desc1_hcka_cd1: req.body.desc1_hcka_cd1,
      desc2_hcka_cd1: req.body.desc2_hcka_cd1,
      desc3_hcka_cd1: req.body.desc3_hcka_cd1,
      desc4_hcka_cd1: req.body.desc4_hcka_cd1,
      preco_hcka_cd3: req.body.preco_hcka_cd3,
      desc1_hcka_cd3: req.body.desc1_hcka_cd3,
      desc2_hcka_cd3: req.body.desc2_hcka_cd3,
      desc3_hcka_cd3: req.body.desc3_hcka_cd3,
      desc4_hcka_cd3: req.body.desc4_hcka_cd3,
      preco_dist_cd1: req.body.preco_dist_cd1,
      desc1_dist_cd1: req.body.desc1_dist_cd1,
      desc2_dist_cd1: req.body.desc2_dist_cd1,
      desc3_dist_cd1: req.body.desc3_dist_cd1,
      desc4_dist_cd1: req.body.desc4_dist_cd1,
      preco_dist_cd3: req.body.preco_dist_cd3,
      desc1_dist_cd3: req.body.desc1_dist_cd3,
      desc2_dist_cd3: req.body.desc2_dist_cd3,
      desc3_dist_cd3: req.body.desc3_dist_cd3,
      desc4_dist_cd3: req.body.desc4_dist_cd3,
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
      quant_desc1: req.body.quant_desc1,
      medida_desc1: req.body.medida_desc1,
      quant_desc2: req.body.quant_desc2,
      medida_desc2: req.body.medida_desc2,
      quant_desc3: req.body.quant_desc3,
      medida_desc3: req.body.medida_desc3,
      quant_desc4: req.body.quant_desc4,
      medida_desc4: req.body.medida_desc4,
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



module.exports = router;