var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
//var Article = mongoose.model('Article');

module.exports = function (app) {
    app.use('/ext', router);

    //var util = require('../../lib/utils')().utilFnExample1();

    // Handler functions
    var index = function (req, res, next) {
        var data = '<h1>External Service Handler</h1>';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    }

    // Handlers
    router.get('/', index);
};