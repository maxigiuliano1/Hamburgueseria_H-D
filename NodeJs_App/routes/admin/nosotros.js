var express = require('express');
var router = express.Router();
var nosotrosModel = require('../../models/nosotrosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req,res,next){
    var nosotros = await nosotrosModel.getNosotros();

    nosotros = nosotros.map(nos => {
        if (nos.img_id) {
            const imagen = cloudinary.image(nos.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return{
                ...nos,
                imagen
            }
        } else{
            return{
                ...nos,
                imagen: ''
            }
        }
    })

    res.render('admin/nosotros', {
        title: 'Nosotros',
        layout: 'layout',
        usuario: req.session.nombre,
        nosotros
    });
});

router.get('/agregarNosotros', (req,res,next)=>{
    res.render('admin/agregarNosotros', {
        layout: 'layout'
    });
});

router.post('/agregarNosotros', async (req,res,next)=>{
    try {
        var img_id = '';
        if(req.files && Object.keys(req.files).length > 0){
            var imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if(req.body.titulo != "" && req.body.descripcion != ""){
            await nosotrosModel.createNosotros({
                ...req.body,
                img_id
            });
            res.redirect('/admin/nosotros');
        }else{
            res.render('admin/agregarNosotros',{
                layout: 'layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregarNosotros', {
            layout: 'layout',
            error: true, message: 'No se cargo la informacion de nosotros'
        });
    }
});

router.get('/eliminarNosotros/:id', async (req,res,next) => {
    var id = req.params.id;
    await nosotrosModel.deleteNosotros(id);
    res.redirect('/admin/nosotros');
});

router.get('/editarNosotros/:id', async (req,res,next) => {
    let id = req.params.id;
    let nosotros = await nosotrosModel.getNosotrosById(id);
    res.render('admin/editarNosotros', {
        layout: 'layout',
        nosotros
    });
});

router.post('/editarNosotros', async (req,res,next) =>{
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
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            img_id
        }

        await nosotrosModel.editNosotrosById(obj, req.body.id);
        res.redirect('/admin/nosotros');
    } catch (error) {
        console.log(error);
        res.render('admin/editarNosotros', {
            layout: 'layout',
            error: true, message: "No se edito el contenido de nosotros"
        });
    }
})

module.exports = router;