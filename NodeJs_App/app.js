var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var session = require('express-session');
var nosotrosRouter = require('./routes/nosotros');
var serviciosRouter = require('./routes/servicios');
var contactoRouter = require('./routes/contacto');
var galeriaRouter = require('./routes/galeria');
var loginRouter = require('./routes/admin/login');

var app = express();

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


app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/nosotros', nosotrosRouter);
app.use('/servicios', serviciosRouter);
app.use('/contacto', contactoRouter);
app.use('/galeria', galeriaRouter);
app.use('/admin/login', loginRouter);

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
