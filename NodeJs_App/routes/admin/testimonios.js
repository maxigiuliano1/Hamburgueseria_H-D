var express = require('express');
var router = express.Router();
var testimonioModel = require('../../models/testimoniosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req,res,next){
    var testimonios = await testimonioModel.getTestimonios();

    testimonios = testimonios.map(testimonio => {
        if (testimonio.img_id) {
            const imagen = cloudinary.image(testimonio.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return{
                ...testimonio,
                imagen
            }
        } else{
            return{
                ...testimonio,
                imagen: ''
            }
        }
    })

    res.render('admin/testimonios', {
        title: 'Testimonios',
        layout: 'layout',
        usuario: req.session.nombre,
        testimonios
    });
});

router.get('/agregarTestimonio', (req,res,next)=>{
    res.render('admin/agregarTestimonio', {
        layout: 'layout'
    });
});

router.post('/agregarTestimonio', async (req,res,next)=>{
    try {
        var img_id = '';
        if(req.files && Object.keys(req.files).length > 0){
            var imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if(req.body.mensaje != ""){
            await testimonioModel.createTestimonio({
                ...req.body,
                img_id
            });
            res.redirect('/admin/testimonios');
        }else{
            res.render('admin/agregarTestimonio',{
                layout: 'layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregarTestimonio', {
            layout: 'layout',
            error: true, message: 'No se cargo el testimonio'
        });
    }
});

router.get('/eliminarTestimonio/:id', async (req,res,next) => {
    var id = req.params.id;
    await testimonioModel.deleteTestimonio(id);
    res.redirect('/admin/testimonios');
});

router.get('/editarTestimonio/:id', async (req,res,next) => {
    let id = req.params.id;
    let testimonio = await testimonioModel.getTestimonioById(id);
    res.render('admin/editarTestimonio', {
        layout: 'layout',
        testimonio
    });
});

router.post('/editarTestimonio', async (req,res,next) =>{
    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if(req.body.img_delete === '1'){
            img_id = null;
            borrar_img_vieja = true;
        } else{
            if(req.files && Object.keys(req.files).length > 0){
                let imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        let obj = {
            mensaje: req.body.mensaje,
            img_id
        }

        await testimonioModel.editTestimonioById(obj, req.body.id);
        res.redirect('/admin/testimonios');
    } catch (error) {
        console.log(error);
        res.render('admin/editarTestimonio', {
            layout: 'layout',
            error: true, message: "No se edito el testimonio"
        });
    }
})

module.exports = router;