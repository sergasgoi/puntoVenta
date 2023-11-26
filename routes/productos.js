var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/', async function (req, res, next) {

  var prod = await consultas.getProd();
  var usuario = req.session.nombre;
  
  if (req.session.admin == 1) {
    res.render('productos', {
      layout: 'layout',
      usuario,
      prod
    });
  } else {
    res.redirect("/inicio")
  }



});



module.exports = router;