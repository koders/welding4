const fs = require('fs-extra');
const path = require('path');
const logger = require('winston');
const mysql = require('mysql');
const rootPath = __dirname + '/../..';

class Db {

  constructor() {
    this.databaseConfig = {};
    this.reconnectingToMysql = false;
    this.connection = null;
    const self = this;
    // Read database config file
    fs.readFile(path.join(rootPath, 'database.json'), 'utf8', (err, data) => {
      try {
        if(err) {
          logger.error(err);
        } else {
          self.databaseConfig = JSON.parse(data)
          self.connectToMysql();
        }
      } catch(err) {
        logger.error(err);
      }
    });
  }

  // Setup mysql
  connectToMysql() {
    const self = this;
    self.connection = mysql.createConnection(self.databaseConfig);
    self.connection.connect(function(err) {
      if (err) {
        if( !self.reconnectingToMysql ) {
          logger.error(err);
        }
        self.reconnectingToMysql = true;
        setTimeout(connectToMysql, 3000);
      }
      else {
        logger.info('Succesfully connected to database');
        self.reconnectingToMysql = false;
      }
    });

    // Attempt to reconnect on error
    self.connection.on('error', function(err) {
        logger.info('Connection to database lost, reconnecting... ');
        self.connectToMysql();
    });
  }

  query(sql, params, callback) {
    const self = this;
    if(typeof params == 'function')
    {
      callback = params;
      params = null;
    }
    const query = self.connection.query(sql, params, callback);
    logger.info(query.sql);
  }

  escape(string) {
    return this.connection.escape(string);
  }
}

const db = new Db();

module.exports = db;
