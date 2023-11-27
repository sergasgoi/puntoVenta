var express = require('express');
var router = express.Router();
var consultas = require('../models/consultas');


router.get('/', function (req, res, next) {

    if (req.session.id_usuario) {
        res.redirect("/inicio")
    } else {
        res.render('login', {
            layout: 'layout'
        });
    }

});


router.get('/salir', async function (req, res, next) {

    if (req.session.turno != 0) {
        await consultas.updateTurnos(req.session.turno);
    }
    req.session.destroy();
    res.redirect('/');
})

router.get('/empezar', async function (req, res, next) {
    try {
        if (req.session.id_usuario) {
            await consultas.agregarTurno(req.session.id_usuario, req.session.nombre);
            const turn = await consultas.getTurno();
            req.session.turno = turn.id;
            res.redirect('/inicio')
        } else {
            res.redirect('/inicio')
        }
    } catch (error) {
        console.log(error);
    }
})

router.get('/finalizar', async function (req, res, next) {
    try {
        if (req.session.id_usuario) {
            await consultas.updateTurnos(req.session.turno);
            req.session.turno = 0;
            res.redirect('/inicio')
        } else {
            res.redirect('/inicio')
        }
    } catch (error) {
        console.log(error);
    }

})


router.get("/registrar/:array2", async function (req, res, next) {

    if (req.session.id_usuario) {

        let array2 = req.params.array2.split(',');
        var array = []

        var total = 0
        var i = 0
        var j, k
        cont = 0

        while (array2[i] != null) {
            j = i + 1
            k = i + 2
            array.push([null, req.session.id_usuario, req.session.turno, array2[i], array2[j], array2[k], ""])
            i = k
            i++
            total = total + parseInt(array2[k]);
            cont++
        }

        await consultas.updateTotal(total, req.session.turno)
        await consultas.agregarRegistros(array)
        await consultas.updateTime(cont)
        res.redirect('/inicio')

    } else {
        res.redirect('/inicio')
    }

})

router.get("/borrarusuario/:id", async function (req, res, next) {

    if (req.session.id_usuario) {
        await consultas.deleteUser(req.params.id)
        await consultas.deleteTurnos(req.params.id)
        await consultas.deleteRegistros(req.params.id)
        res.redirect('/usuarios')
    } else {
        res.redirect('/inicio')
    }


})

router.get("/borrarproducto/:id", async function (req, res, next) {

    if (req.session.id_usuario) {
        await consultas.deleteProducto(req.params.id)
        res.redirect('/productos')
    } else {
        res.redirect('/inicio')
    }


})



router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;
        var data = await consultas.getUser(usuario, password);

        if (data != undefined) {
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            req.session.admin = data.admin
            req.session.turno = 0
            req.session.total = 0
            res.redirect('/inicio');
        } else {
            res.render('login', {
                layout: 'layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;

