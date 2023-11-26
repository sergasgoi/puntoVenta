var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');

router.get('/', async function (req, res, next) {

  var usuario = req.session.nombre;

  if (req.session.admin == 1) {
    res.render('agregaruser', {
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
    if (req.body.user != "" && req.body.pass != "") {

      const user = await consultas.getUsuario(req.body.user);

      if (user[0].total == 0) {
        await consultas.agregarUser(req.body.user, req.body.pass);
        res.redirect("/usuarios")
      } else {
        res.render('agregaruser', {
          layout: 'layout',
          error: true,
          message: 'Ya existe un Usuario con ese nombre',
          usuario
        });

      }

    } else {
      res.render('agregaruser', {
        layout: 'layout',
        error: true,
        message: 'Todos los campos son requeridos',
        usuario
      });
    }
  } catch (error) {
    console.log(error);
    res.render('agregaruser', {
      layout: 'layout',
      error: true,
      message: 'No se Agrego',
      usuario
    });
  }
});


module.exports = router;