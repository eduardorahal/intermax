const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Regiao = require('../models/regiao');
const Counter = require('../models/counter');

const mongoose = require('mongoose');

const idRegiao = Number;


// Adiciona
router.post('/adiciona', (req, res, next) => {
    Counter.findByIdAndUpdate("regiao", {$inc: { seq: 1 }}, (err, obj) => {
    
      let newRegiao = new Regiao({
        _id: obj.seq,
        nome: req.body.nome,
        locais: req.body.locArr,
      })

        Regiao.addRegiao(newRegiao, (err, regiao) => {
          if(err){
            console.log(err);
            res.json({success: false});
          }
          else {
            res.json({success: true, msg: 'Região Cadastrada com Sucesso!', regiao});
          }
        })

    });
});


// Consulta Simples
router.get('/consulta', (req, res) => {
    Regiao.find({}, function(err, regioes){
        res.json(regioes);
    });
});


// Consulta Regiao por Campo de Busca
router.post('/consulta', (req, res) => {
    data = req.body.consulta_regiao;
    const query = {$and:[{$or:[{nome:{$regex:data, $options: 'i'}},{"locais.estado":{$regex:data, $options: 'i'}},{"locais.cidade":{$regex:data, $options: 'i'}}]},{$or:[{removed: null}, {removed: "false"}]}]};
    Regiao.find(query, (err, obj) => {
      if(err) { throw err }
      else {
      res.json(obj);
      }
  });
});


// Modifica
router.post('/modifica', (req, res, next) => {
      let newRegiao = new Regiao({
        _id: req.body._id,
        nome: req.body.nome,
        locais: req.body.locArr,
      })
        Regiao.findByIdAndUpdate(newRegiao._id, {$set: newRegiao}, (err, regiao) => {
          if(err){
            console.log(err);
            res.json({success: false});
          }
          else {
            res.json({success: true, msg: 'Região Alterada com Sucesso!', regiao});
          }
        })
});


// Remove
router.post('/remove', (req, res, next) => {
  let delRegiao = {
    _id: req.body._id,
  }
    Regiao.findByIdAndUpdate(delRegiao._id, { $set: { "removed" : true }}, (err, regiao) => {
      if(err){
        res.json({success: false});
      }
      else {
        res.json({success: true, msg: 'Região Excluída com Sucesso!', regiao});
      }
    })
});


module.exports = router;