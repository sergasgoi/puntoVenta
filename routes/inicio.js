var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/', async function (req, res, next) {

  var prod = await consultas.getProd();
  var usuario = req.session.nombre;

  if (req.session.turno == 0) { 
    if (req.session.admin == 0) {
      res.render('turno', {
        layout: 'layout',
        usuario
      });
    } else {
      res.render('turnoadm', {
        layout: 'layout',
        usuario
      });
    }
  } else {
    res.render('inicio', {
      layout: 'layout',
      prod,
      usuario
    });

  }


});



module.exports = router;