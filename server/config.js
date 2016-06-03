'use strict';

let nconf = require('nconf');
let path = require('path');

let fullPath = path.normalize(__dirname + '/../auction.config.json');
console.log(`Loading configuration from ${fullPath}`);

nconf.argv().env().file({ file: fullPath });

nconf.defaults({
	db: {
		// true for everything
		// ['ErrorPacket', 'ComQueryPacket'] - queries and errors
		debug: ['ErrorPacket']
	}
});

module.exports = nconf;