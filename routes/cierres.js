var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/', async function (req, res, next) {

  var cierres
  if (req.session.admin == 1) {
    cierres = await consultas.getTurnosAdm();
  } else {
    cierres = await consultas.getTurnos(req.session.id_usuario);
  }
  var usuario = req.session.nombre;

  res.render('cierres', {
    layout: 'layout',
    usuario,
    cierres
  });

});



module.exports = router;