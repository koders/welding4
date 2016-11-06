const date = require('date-and-time');
const winston = require('winston');

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

module.exports = logger;
