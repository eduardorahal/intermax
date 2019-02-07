const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    idEmpresa: req.body.idEmpresa,
    telefone: req.body.telefone,
    acesso: req.body.acesso,
    username: req.body.username,
    password: req.body.password
  });

  User.getUserByUsername(newUser.username, (err, user) => {
    if(user == null){
      User.addUser(newUser, (err, user) => {
        if(err){
          res.json({success: false, msg: 'Não foi possível cadastrar o Usuário'});
        } else {
          res.json({success: true, msg: 'Usuário Cadastrado'});
        }
      });
    } else {
      res.json({msg: 'Username já existe'});
    }
  })

  
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg:'Usuário não existe'});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 86400
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          jwt: token,
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            idEmpresa: user.idEmpresa,
            telefone: user.telefone,
            acesso: user.acesso,
            username: user.username
          }
        });
      } else {
        return res.json({success: false, msg:'Senha Incorreta'});
      }
    });
  });
});


// Profile

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});


// Consulta por ID

router.post('/consulta', (req, res) => {
    data = req.body.consulta_id;
    const query = {_id : data};
    User.find(query, (err, obj) => {
      if(err) { throw err }
      else {
      res.json(obj);
      }
  });
});


module.exports = router;
