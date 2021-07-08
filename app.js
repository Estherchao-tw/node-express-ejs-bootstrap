var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var testRouter = require('./routes/month');
var paginationRouter = require('./routes/pagination');
var homeRouter = require('./routes/home');
var pageRouter = require('./routes/page');
var fetchRouter = require('./routes/fetch');
var d3Router = require('./routes/d3');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/pagination', paginationRouter);
app.use('/home', homeRouter);
app.use('/page', pageRouter);
app.use('/fetch', fetchRouter);
app.use('/d3', d3Router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var rightNow = new Date();
  var res = rightNow.toISOString().slice(0,10);
  console.log("Time:",res);
  console.log('Request URL:', req.originalUrl);
  console.log('Request Type:', req.method);
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
