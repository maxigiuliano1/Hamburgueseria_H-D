var express = require('express');
var router = express.Router();
var usuariosModal = require('./../../models/usuariosModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {title: 'Login'});
});

router.get('/logout', function(req,res,next){
  req.session.destroy();
  res.render('admin/login', {
    layout: 'layout'
  })
})

/* POST home page */
router.post('/', async (req,res,next) =>{
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;
    var data = await usuariosModal.getUserByUsernameAndPassword(usuario,password);

    if (data!= undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    }else{
      res.render('admin/login', {
        layout: 'layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})


module.exports = router;