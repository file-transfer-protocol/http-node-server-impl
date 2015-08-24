var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'protocolImpl'
        },
        port: 3000,
        db: 'mongodb://localhost/protocolImpl'
    },

    test: {
        root: rootPath,
        app: {
            name: 'protocolImpl'
        },
        port: 3000,
        db: 'mongodb://localhost/protocolImpl-test'
    },

    production: {
        root: rootPath,
        app: {
            name: 'protocolImpl'
        },
        port: 3000,
        db: 'mongodb://localhost/protocolImpl-production'
    }
};

module.exports = config[env];