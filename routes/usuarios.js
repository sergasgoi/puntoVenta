var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/', async function (req, res, next) {

  var users = await consultas.getUsers()
  var usuario = req.session.nombre;
  
  if (req.session.admin == 1) {
    res.render('usuarios', {
      layout: 'layout',
      usuario,
      users
    });
  } else {
    res.redirect("/inicio")
  }


});


module.exports = router;