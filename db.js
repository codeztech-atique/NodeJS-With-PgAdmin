const config = require('config');
const chalk = require('chalk');
const pg = require('pg');

var connectionString = config.pg.hostName+"://"+ config.pg.username+":"+config.pg.password+"@"+config.pg.url+":"+config.pg.port+"/"+config.pg.databaseName;

var client = new pg.Client(connectionString);
client.connect(function(err) {
  if(err) {
    console.log(chalk.red('could not connect to postgres', err));
  }
  else {
    console.log(chalk.green('PGAdmin Connected'));
  }
});


module.exports = client;