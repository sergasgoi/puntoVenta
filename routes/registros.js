var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/:id', async function (req, res, next) {

  var registros = await consultas.getRegistros(req.params.id);
  var usuario = req.session.nombre;

  res.render('registros', {
    layout: 'layout',
    usuario,
    registros
  });



});



module.exports = router;