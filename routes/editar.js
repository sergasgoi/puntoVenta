var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas')


router.get('/:id', async function (req, res, next) {

    var usuario = req.session.nombre

    if (req.session.admin == 1) {
        const edit = await consultas.getProductoById(req.params.id);
        res.render('editar', {
            layout: 'layout',
            usuario,
            edit
        });
    } else {
        res.redirect("/inicio")
    }

});

router.post('/', async function (req, res, next) {

    var usuario = req.session.nombre

    try {
        if (req.body.nombre != "" && req.body.precio != "") {

            await consultas.editProductos(req.body, req.body.id);

            res.redirect("/productos")

        } else {
            const edit = await consultas.getProductoById(req.body.id);
            res.render('editar', {
                layout: 'layout',
                error: true,
                message: 'Todos los campos son requeridos',
                usuario,
                edit
            });
        }
    } catch (error) {
        console.log(error);
        const edit = await consultas.getProductoById(req.body.id);
        res.render('editar', {
            layout: 'layout',
            error: true,
            message: 'No se edito',
            usuario,
            edit
        });
    }

});




module.exports = router;