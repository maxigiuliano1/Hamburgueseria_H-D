var express = require('express');
var router = express.Router();
var productoDestacadoModel = require('../../models/productosDestacadosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req,res,next){
    var productosDestacados = await productoDestacadoModel.getProductosDestacados();

    productosDestacados = productosDestacados.map(producto => {
        if (producto.img_id) {
            const imagen = cloudinary.image(producto.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return{
                ...producto,
                imagen
            }
        } else{
            return{
                ...producto,
                imagen: ''
            }
        }
    })

    res.render('admin/productosDestacados', {
        title: 'Testimonios',
        layout: 'layout',
        usuario: req.session.nombre,
        productosDestacados
    });
});

router.get('/agregarProductosDestacados', (req,res,next)=>{
    res.render('admin/agregarProductosDestacados', {
        layout: 'layout'
    });
});

router.post('/agregarProductosDestacados', async (req,res,next)=>{
    try {
        var img_id = '';
        if(req.files && Object.keys(req.files).length > 0){
            var imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if(req.body.titulo != "" && req.body.descripcion != ""){
            await productoDestacadoModel.createProductoDestacado({
                ...req.body,
                img_id
            });
            res.redirect('/admin/productosDestacados');
        }else{
            res.render('admin/agregarProductosDestacados',{
                layout: 'layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregarProductosDestacados', {
            layout: 'layout',
            error: true, message: 'No se cargo el producto'
        });
    }
});

router.get('/eliminarProductosDestacados/:id', async (req,res,next) => {
    var id = req.params.id;
    await productoDestacadoModel.deleteProductoDestacado(id);
    res.redirect('/admin/productosDestacados');
});

router.get('/editarProductosDestacados/:id', async (req,res,next) => {
    let id = req.params.id;
    let producto = await productoDestacadoModel.getProductoDestacadoById(id);
    res.render('admin/editarProductosDestacados', {
        layout: 'layout',
        producto
    });
});

router.post('/editarProductosDestacados', async (req,res,next) =>{
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

        await productoDestacadoModel.editProductoDestacadoById(obj, req.body.id);
        res.redirect('/admin/productosDestacados');
    } catch (error) {
        console.log(error);
        res.render('admin/editarProductosDestacados', {
            layout: 'layout',
            error: true, message: "No se edito el producto"
        });
    }
})

module.exports = router;