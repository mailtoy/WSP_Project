var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHsb = require('express-handlebars')
var mongoose = require('mongoose');

var session = require('express-session');
var flash = require('connect-flash');
var validator = require('express-validator');
var passport = require('passport');
var MongoStore = require('connect-mongo')(session);

var routes = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/product');
var exphbs = require('express-handlebars');
var hbsHelpers = exphbs.create({
    helpers: require("./public/helpers/handlebars.js").helpers,
    defaultLayout: 'layout',
    extname: '.hbs'
});
var app = express();


mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });
require('./config/passport')

// view engine setup
app.engine('.hbs', expressHsb({ defaultLayout: 'layout', extname: '.hbs' }))
app.engine('.hbs', hbsHelpers.engine);
app.set('view engine', 'hbs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(validator());
app.use(cookieParser());
app.use(session({
    secret: 'eieiza',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),
    cookie: { maxAge: 180 * 60 * 1000 }
}))
app.use(flash())
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
})

app.use

app.use('/', routes);
app.use('/user', users);
app.use('/product', products);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
