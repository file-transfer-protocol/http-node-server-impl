var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'vodafonetest'
        },
        port: 3000,
        db: 'mongodb://localhost/vodafonetest-development'
    },

    test: {
        root: rootPath,
        app: {
            name: 'vodafonetest'
        },
        port: 3000,
        db: 'mongodb://localhost/vodafonetest-test'
    },

    production: {
        root: rootPath,
        app: {
            name: 'vodafonetest'
        },
        port: 3000,
        db: 'mongodb://localhost/vodafonetest-production'
    }
};

module.exports = config[env];