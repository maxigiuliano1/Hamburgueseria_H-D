var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function(req,res,next){
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
        title: 'Novedades',
        layout: 'layout',
        usuario: req.session.nombre,
        novedades
    });
});

router.get('/agregar', (req,res,next)=>{
    res.render('admin/agregar', {
        layout: 'layout'
    });
});

router.post('/agregar', async (req,res,next)=>{
    try {
        if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
            await novedadesModel.createNovedades(req.body);
            res.redirect('/admin/novedades');
        }else{
            res.render('admin/agregar',{
                layout: 'layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'layout',
            error: true, message: 'No se cargo la novedad'
        });
    }
});

module.exports = router;