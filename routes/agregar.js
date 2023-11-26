var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/', async function (req, res, next) {

  var usuario = req.session.nombre;

  if (req.session.admin == 1) {
    res.render('agregar', {
      layout: 'layout',
      usuario
    });
  } else {
    res.redirect("inicio")
  }

});


router.post('/', async function (req, res, next) {

  var usuario = req.session.nombre;

  try {
    if (req.body.name != "" && req.body.numero != "") {

      const product = await consultas.getProducto(req.body.name);

      if (product[0].total == 0) {
        let name = req.body.name.split(' ').join('_')
        await consultas.agregarProducto(name, req.body.numero);
        res.redirect("/productos")

      } else {

        res.render('agregar', {
          layout: 'layout',
          error: true,
          message: 'Ya existe un producto con ese nombre',
          usuario
        });

      }

    } else {
      res.render('agregar', {
        layout: 'layout',
        error: true,
        message: 'Todos los campos son requeridos',
        usuario
      });
    }
  } catch (error) {
    console.log(error);
    res.render('agregar', {
      layout: 'layout',
      error: true,
      message: 'No se Agrego',
      usuario
    });
  }
});


module.exports = router;