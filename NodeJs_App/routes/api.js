var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
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

module.exports = router;