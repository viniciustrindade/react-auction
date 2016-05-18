'use strict';

let http = require('http');
let express = require('express');
let api = require('./api/api.js');

let app = express();
let server = http.createServer(app);

app.use('/api', api());

server.listen(9090, () => {
	console.log('Listening to http://localhost:9090');
});