const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Cliente = require('../models/cliente');
const Counter = require('../models/counter');

const mongoose = require('mongoose');

const idCliente = Number;





// Adiciona
router.post('/adiciona', (req, res, next) => {
    Counter.findByIdAndUpdate("cliente", {$inc: { seq: 1 }}, (err, obj) => {
      let newCliente = new Cliente({
        _id: obj.seq,
        cnpj: req.body.cnpj,
        razao: req.body.razao,
        categoria: req.body.categoria,
        contato: req.body.contato,
        insc_estadual: req.body.insc_estadual,
        regiao: req.body.regiao,
        enderecos: req.body.endArr,
        telefones: req.body.telArr,
        cpfs: req.body.cpfArr,
      })
        Cliente.addCliente(newCliente, (err, cliente) => {
          if(err){
            res.json({success: false});
          }
          else {
            res.json({success: true, msg: 'Cliente Cadastrado com Sucesso!', cliente});
          }
        })

    });
});


// Consulta Cliente por CNPJ ou Razão Social
router.post('/consulta', (req, res) => {
    data = req.body.consulta_cliente;
    const query = {$and:[{$or:[{razao:{$regex:data, $options: 'i'}},{cnpj:{$regex:data, $options: 'i'}}]},{$or:[{removed: null}, {removed: "false"}]}]};
    Cliente.find(query, (err, obj) => {
      if(err) { throw err }
      else {
      res.json(obj);
      }
  });
});


// Consulta Cliente por ID
router.post('/consultaid', (req, res) => {
    data = req.body.consulta_id;
    const query = {$and:[{_id : data},{$or:[{removed : null}, {removed : "false"}]}]};
    Cliente.find(query, (err, obj) => {
      if(err) { throw err }
      else {
      res.json(obj);
      }
  });
});


// Consulta Cliente por Diversos Campos
router.post('/consultamulti', (req, res) => {
  query = [];
  if(req.body.regiao){
    regiao = {'regiao': req.body.regiao};
    query.push(regiao);
  }
  if(req.body.cidade){
    cidade_tmp = {$regex: req.body.cidade};
    cidade = {'enderecos.cidade': cidade_tmp};
    query.push(cidade);
  }
  if(req.body.estado){
    estado_tmp = {$regex: req.body.estado};
    estado = {'enderecos.estado': estado_tmp};
    query.push(estado);
  }
  if(req.body.categoria){
    categoria = {'categoria': req.body.categoria};
    query.push(categoria);
  }
  if(req.body.representante){
    representante = {'representante': req.body.representante};
    query.push(representante);
  }
  const busca = {$and:[{$and:query}, {$or:[{removed: null}, {removed: "false"}]}]};
  Cliente.find(busca, (err, obj) => {
    if(err) { throw err }
    else {
    res.json(obj);
    }
  });
});


// Modifica
router.post('/modifica', (req, res, next) => {
  let newCliente = new Cliente({
    _id: req.body._id,
    cnpj: req.body.cnpj,
    razao: req.body.razao,
    categoria: req.body.categoria,
    contato: req.body.contato,
    insc_estadual: req.body.insc_estadual,
    regiao: req.body.regiao,
    enderecos: req.body.endArr,
    telefones: req.body.telArr,
    cpfs: req.body.cpfArr,
  })
    Cliente.findByIdAndUpdate(newCliente._id, {$set: newCliente}, (err, cliente) => {
      if(err){
        res.json({success: false});
      }
      else {
        res.json({success: true, msg: 'Dados Alterados com Sucesso!', cliente});
      }
    })
});


// Remove
router.post('/remove', (req, res, next) => {
  let delCliente = {
    _id: req.body._id,
  }
    Cliente.findByIdAndUpdate(delCliente._id, { $set: { "removed" : true }}, (err, cliente) => {
      if(err){
        res.json({success: false});
      }
      else {
        res.json({success: true, msg: 'Cliente Excluído com Sucesso!', cliente});
      }
    })
});


module.exports = router;