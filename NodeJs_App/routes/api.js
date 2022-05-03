var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var testimoniosModel = require('./../models/testimoniosModel');
var productosDestacadosModel = require('./../models/productosDestacadosModel');
var cloudinary = require('cloudinary').v2;

router.get('/novedades', async function(req,res,next){
    var novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 300,
                height: 300,
                crop: 'pad'
            });
            return{
                ...novedades,
                imagen
            }
        } else{
            return{
                ...novedades,
                imagen: ''
            }
        }
    });
    res.json(novedades);
});

router.get('/testimonios', async function(req,res,next){
    var testimonios = await testimoniosModel.getTestimonios();

    testimonios = testimonios.map(testimonios => {
        if (testimonios.img_id) {
            const imagen = cloudinary.url(testimonios.img_id, {
                width: 100,
                height: 100,
                crop: 'pad'
            });
            return{
                ...testimonios,
                imagen
            }
        } else{
            return{
                ...testimonios,
                imagen: ''
            }
        }
    });
    res.json(testimonios);
});

router.get('/productosDestacados', async function(req,res,next){
    var productos = await productosDestacadosModel.getProductosDestacados();

    productos = productos.map(productos => {
        if (productos.img_id) {
            const imagen = cloudinary.url(productos.img_id, {
                width: 300,
                height: 300,
                crop: 'pad'
            });
            return{
                ...productos,
                imagen
            }
        } else{
            return{
                ...productos,
                imagen: ''
            }
        }
    });
    res.json(productos);
});

module.exports = router;