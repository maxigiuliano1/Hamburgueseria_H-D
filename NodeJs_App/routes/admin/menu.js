var express = require('express');
var router = express.Router();
var menuModel = require('../../models/menuModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req,res,next){
    var menu = await menuModel.getMenu();

    menu = menu.map(menus => {
        if (menus.img_id) {
            const imagen = cloudinary.image(menus.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return{
                ...menus,
                imagen
            }
        } else{
            return{
                ...menus,
                imagen: ''
            }
        }
    })

    res.render('admin/menu', {
        title: 'Menu',
        layout: 'layout',
        usuario: req.session.nombre,
        menu
    });
});

router.get('/agregarMenu', (req,res,next)=>{
    res.render('admin/agregarMenu', {
        layout: 'layout'
    });
});

router.post('/agregarMenu', async (req,res,next)=>{
    try {
        var img_id = '';
        if(req.files && Object.keys(req.files).length > 0){
            var imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if(req.body.titulo != "" && req.body.precio != "" && req.body.descripcion != ""){
            await menuModel.createMenu({
                ...req.body,
                img_id
            });
            res.redirect('/admin/menu');
        }else{
            res.render('admin/agregarMenu',{
                layout: 'layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregarMenu', {
            layout: 'layout',
            error: true, message: 'No se cargo el menu'
        });
    }
});

router.get('/eliminarMenu/:id', async (req,res,next) => {
    var id = req.params.id;
    await menuModel.deleteMenu(id);
    res.redirect('/admin/menu');
});

router.get('/editarMenu/:id', async (req,res,next) => {
    let id = req.params.id;
    let menu = await menuModel.getMenuById(id);
    res.render('admin/editarMenu', {
        layout: 'layout',
        menu
    });
});

router.post('/editarMenu', async (req,res,next) =>{
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
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            img_id
        }

        await menuModel.editMenuById(obj, req.body.id);
        res.redirect('/admin/menu');
    } catch (error) {
        console.log(error);
        res.render('admin/editarMenu', {
            layout: 'layout',
            error: true, message: "No se edito el menu"
        });
    }
})

module.exports = router;