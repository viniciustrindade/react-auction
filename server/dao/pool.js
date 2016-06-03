'use strict';

const mysql = require('mysql');
const config = require('../config');

const pool  = mysql.createPool({
	connectionLimit : 20,
	connectTimeout: 15000,
	host     : config.get('db:host'),
	user     : config.get('db:user'),
	password : config.get('db:password'),
	database : config.get('db:database'),
	debug : config.get('db:debug')
});

console.log(`SQL debug is ${config.get('db:debug')}`);

module.exports = pool;