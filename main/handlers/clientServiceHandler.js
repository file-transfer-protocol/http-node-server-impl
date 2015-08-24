var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.use('/client', router);

    // Handler functions
    var index = function (req, res, next) {
        var data = '<h1>Client Service Handler</h1>';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    }

    // Handlers
    router.get('/', index);
};
