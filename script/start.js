'use strict';

const Webpack = require('webpack');
const webpackConfig = require('./config.js');
const WebpackDevServer = require('webpack-dev-server');

const compiler = Webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
    stats: {
        colors: true
    }
});


server.listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080');
});
