var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session = require('express-session');
var fileUpload = require('express-fileupload');
var session = require('express-session');
var loginRouter = require('./routes/admin/login');
var novedadesRouter = require('./routes/admin/novedades');
var servicioRouter = require('./routes/admin/servicios');
var productoDestacadoRouter = require('./routes/admin/productosDestacados');
var testimoniosRouter = require('./routes/admin/testimonios');
var menuRouter = require('./routes/admin/menu');
var nosotrosRouter = require('./routes/admin/nosotros');
var apiRouter = require('./routes/api');
var cors = require('cors');

var app = express();

app.use(session({
  secret: 'PWsdadsffflll',
  cookie: {maxAge: null},
  resave: false,
  saveUninitialized: true
}))

secured = async (req, res, next)=>{
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'awWsasksadslaggtRRRlnaMxigiuBbF',
  resave: false,
  saveUninitialized: true
}));

app.get('/', function(req, res){
  var know = Boolean(req.session.username)
  console.log(req.session.username)
  res.render('admin/login', {
    title: 'session initialize in Express.js',
    know: know,
    username: req.session.username
  });
});

app.post('/login', function(req, res){
  if (req.body.username) {
    req.session.username = req.body.username
  }
  res.redirect('/');
});

app.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('admin/login');
});

app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, novedadesRouter);
app.use('/admin/servicios', secured, servicioRouter);
app.use('/admin/productosDestacados', secured, productoDestacadoRouter);
app.use('/admin/testimonios', secured, testimoniosRouter);
app.use('/admin/menu', secured, menuRouter);
app.use('/admin/nosotros', secured, nosotrosRouter);
app.use('/api', cors(), apiRouter);

var pool = require('./models/bd');

/*
pool.query('select * from usuarios').then(function(resultado){
  console.log(resultado)
});

pool.query('select * from novedades order by id desc').then(function(resultado){
  console.log(resultado)
});*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
