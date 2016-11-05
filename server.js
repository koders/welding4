#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const express = require('express');
const winston = require('winston');
const date = require('date-and-time');

global.__CLIENT__ = false;
global.__SERVER__ = true;

// Setup winston logger
const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      formatter: function(options) {
        // Return string will be passed to logger.
        return date.format(new Date(), 'YYYY/MM/DD HH:mm:ss:SSS') + ' ' +
          options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
          (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
      }
    })
  ]
});

logger.info('Starting up server...');

const app = express();
// Static paths
app.use('/images', express.static(path.join(__dirname, './src/images')))

// HTML request logging
app.use(require('morgan')('short'));

// Setup webpack
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

const api_path = 'api';

app.get('/' + api_path + '/test' , function(req, res) {
  res.status(200).send('It works!');
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
  logger.info('Server started up.\nListening on port 3000');
});
