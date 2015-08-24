var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
//var Article = mongoose.model('Article');

module.exports = function (app) {
    app.use('/', router);

    var index = function (req, res, next) {
        var data = '<h1>hello world</h1>';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    }

    router.get('/', index);
};