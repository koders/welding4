#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const express = require('express');

const utilPath = __dirname + '/src/utils/';
// const order = require(utilPath + '../Order');
const logger = require(utilPath + 'logger');
const db = require(utilPath + 'mysql');

global.__CLIENT__ = false;
global.__SERVER__ = true;

logger.info('Starting up server...');

const app = express();
// Static paths
app.use('/assets', express.static(path.join(__dirname, './src/assets')));
app.use('/assets/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/assets/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/assets/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/assets/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts')); // redirect CSS bootstrap
app.use('/assets/fonts', express.static(__dirname + '/node_modules/font-awesome/css')); // redirect CSS bootstrap

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

// REST API
const api_path = 'api';

app.get('/' + api_path + '/test' , function(req, res) {
  res.status(200).send('It works!');
});

app.get('/' + api_path + '/orders/:id' , function(req, res) {
  // Parsing to int so no need for escaping
  let id = parseInt(req.params.id);
  if(isNaN(id)) {
    res.status(404).send();
    return;
  }
  const query = 'SELECT * from orders where id = ?';
  db.query(query, [id], function(err, rows, fields) {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

app.get('/' + api_path + '/orders' , function(req, res) {
  db.query('SELECT * from orders', function(err, rows, fields) {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){
  logger.info('Server started up.\nListening on port 3000');
});
