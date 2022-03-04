var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respuesta desde la ruta users');
});

module.exports = router;
