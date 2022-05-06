var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var testimoniosModel = require('./../models/testimoniosModel');
var productosDestacadosModel = require('./../models/productosDestacadosModel');
var serviciosModel = require('./../models/serviciosModel');
var menuModel = require('./../models/menuModel');
var nosotrosModel = require('./../models/nosotrosModel');
var nodemailer = require('nodemailer');
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
            const imagen = cloudinary.url(productos.img_id);
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

router.get('/servicios', async function(req,res,next){
    var servicios = await serviciosModel.getServicios();

    servicios = servicios.map(servicios => {
        return{
            ...servicios
        }
    });
    res.json(servicios);
});

router.get('/menu', async function(req,res,next){
    var menu = await menuModel.getMenu();

    menu = menu.map(menu => {
        if (menu.img_id) {
            const imagen = cloudinary.url(menu.img_id);
            return{
                ...menu,
                imagen
            }
        } else{
            return{
                ...menu,
                imagen: ''
            }
        }
    });
    res.json(menu);
});

router.get('/nosotros', async function(req,res,next){
    var nosotros = await nosotrosModel.getNosotros();

    nosotros = nosotros.map(nosotros => {
        if (nosotros.img_id) {
            const imagen = cloudinary.url(nosotros.img_id);
            return{
                ...nosotros,
                imagen
            }
        } else{
            return{
                ...nosotros,
                imagen: ''
            }
        }
    });
    res.json(nosotros);
});

router.post('/contacto', async (req,res)=>{
    const mail = {
        to: 'maxigiuliano18@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contacto a traves de la web por el asunto: ${req.body.asunto}
        <br> y quiere mas informacion a este correo: ${req.body.email}
        <br> Ademas, hizo el siguiente comentario: ${req.body.mensaje} <br>`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail);

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;