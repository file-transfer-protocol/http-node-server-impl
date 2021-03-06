var express = require('express');
var glob = require('glob');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function (app, config) {

    var env = process.env.NODE_ENV || 'development';
    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env == 'development';

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());

    var filters = glob.sync(config.root + '/main/filters/*.js');
    filters.forEach(function (filter) {
        require(filter)(app);
    });

    var handlers = glob.sync(config.root + '/main/handlers/*.js');
    handlers.forEach(function (handler) {
        require(handler)(app);
    });

    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            var data = {
                message: err.message,
                error: err
            };
            res.setHeader('Content-Type', 'text/plain')
            res.end(JSON.stringify(data));
        });
    }

    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        var data = {
            message: err.message,
            error: {},
            title: 'error'
        };
        res.setHeader('Content-Type', 'text/plain')
        res.end(JSON.stringify(data));
    });

};
