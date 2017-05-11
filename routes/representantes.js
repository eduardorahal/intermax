const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Representante = require('../models/representante');
const Counter = require('../models/counter');

const mongoose = require('mongoose');

const idRepresentante = Number;





// Adiciona
router.post('/adiciona', (req, res, next) => {
    Counter.findByIdAndUpdate("representante", {$inc: { seq: 1 }}, (err, obj) => {
    
      let newRepresentante = new Representante({
        _id: obj.seq,
        cnpj: req.body.cnpj,
        razao: req.body.razao,
        contato: req.body.contato,
        insc_estadual: req.body.insc_estadual,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        regioes: req.body.regArr,
        telefones: req.body.telArr,
        categorias: req.body.catArr,
      })

        Representante.addRepresentante(newRepresentante, (err, representante) => {
          if(err){
            console.log(err);
            res.json({success: false});
          }
          else {
            res.json({success: true, msg: 'Representante Cadastrado com Sucesso!', representante});
          }
        })

    });
});


// Consulta TUDO
router.get('/consulta', (req, res) => {
    Representante.find({}, function(err, representantes){
        res.json(representantes);
    });
});


// Consulta Representante por CNPJ ou Razão Social
router.post('/consulta', (req, res) => {
    data = req.body.consulta_representante;
    const query = {$and:[{$or:[{razao:{$regex:data, $options: 'i'}},{cnpj:{$regex:data, $options: 'i'}}]},{$or:[{removed: null}, {removed: "false"}]}]};
    Representante.find(query, (err, obj) => {
      if(err) { throw err }
      else {
      res.json(obj);
      }
  });
});


// Consulta Representante por ID
router.post('/consultaid', (req, res) => {
    data = req.body.consulta_id;
    const query = {$and:[{_id : data},{$or:[{removed : null}, {removed : "false"}]}]};
    Representante.find(query, (err, obj) => {
      if(err) { throw err }
      else {
      res.json(obj);
      }
  });
});


// Consulta Representante por Diversos Campos
router.post('/consultamulti', (req, res) => {
  if(req.body.all == 1){
    Representante.find({}, (err, obj) => {
        if(err) { throw err }
        else {
        res.json(obj);
        }
      });
  } else {
      query = [];
      if(req.body.regiao){
        regiao = {'regioes._id': req.body.regiao};
        query.push(regiao);
      }
      if(req.body.cidade){
        cidade_tmp = {$regex: req.body.cidade};
        cidade = {'cidade': cidade_tmp};
        query.push(cidade);
      }
      if(req.body.estado){
        estado_tmp = {$regex: req.body.estado};
        estado = {'estado': estado_tmp};
        query.push(estado);
      }
      if(req.body.categoria){
        categoria = {'categorias.categoria': req.body.categoria};
        query.push(categoria);
      }
      const busca = {$and:[{$and:query}, {$or:[{removed: null}, {removed: "false"}]}]};
      Representante.find(busca, (err, obj) => {
        if(err) { throw err }
        else {
        res.json(obj);
        }
      });
    }
  });


// Modifica
router.post('/modifica', (req, res, next) => {
      let newRepresentante = new Representante({
        _id: req.body._id,
        cnpj: req.body.cnpj,
        razao: req.body.razao,
        contato: req.body.contato,
        insc_estadual: req.body.insc_estadual,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        telefones: req.body.telArr,
        categorias: req.body.catArr,
      })
        Representante.findByIdAndUpdate(newRepresentante._id, {$set: newRepresentante}, (err, representante) => {
          if(err){
            console.log(err);
            res.json({success: false});
          }
          else {
            res.json({success: true, msg: 'Dados Alterados com Sucesso!', representante});
          }
        })
});


// Remove
router.post('/remove', (req, res, next) => {
  let delRepresentante = {
    _id: req.body._id,
  }
    Representante.findByIdAndUpdate(delRepresentante._id, { $set: { "removed" : true }}, (err, representante) => {
      if(err){
        res.json({success: false});
      }
      else {
        res.json({success: true, msg: 'Representante Excluído com Sucesso!', representante});
      }
    })
});


module.exports = router;