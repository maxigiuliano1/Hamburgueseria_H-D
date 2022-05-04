var express = require('express');
var router = express.Router();
var serviciosModel = require('../../models/serviciosModel');

router.get('/', async function(req,res,next){
    var servicios = await serviciosModel.getServicios();

    servicios = servicios.map(servicio => {
            return{
                ...servicio
            }
    })

    res.render('admin/servicios', {
        title: 'Servicios',
        layout: 'layout',
        usuario: req.session.nombre,
        servicios
    });
});

router.get('/agregarServicios', (req,res,next)=>{
    res.render('admin/agregarServicios', {
        layout: 'layout'
    });
});

router.post('/agregarServicios', async (req,res,next)=>{
    try {
        if(req.body.titulo != "" && req.body.descripcion != ""){
            await serviciosModel.createServicio({
                ...req.body
            });
            res.redirect('/admin/servicios');
        }else{
            res.render('admin/agregarServicios',{
                layout: 'layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregarServicios', {
            layout: 'layout',
            error: true, message: 'No se cargo el testimonio'
        });
    }
});

router.get('/eliminarServicios/:id', async (req,res,next) => {
    var id = req.params.id;
    await serviciosModel.deleteServicio(id);
    res.redirect('/admin/servicios');
});

router.get('/editarServicios/:id', async (req,res,next) => {
    let id = req.params.id;
    let servicio = await serviciosModel.getServicioById(id);
    res.render('admin/editarServicios', {
        layout: 'layout',
        servicio
    });
});

router.post('/editarServicios', async (req,res,next) =>{
    try {
        let obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion
        }

        await serviciosModel.editServicioById(obj, req.body.id);
        res.redirect('/admin/servicios');
    } catch (error) {
        console.log(error);
        res.render('admin/editarServicios', {
            layout: 'layout',
            error: true, message: "No se edito el servicio"
        });
    }
})

module.exports = router;