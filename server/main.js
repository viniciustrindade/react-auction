'use strict';

let http = require('http');
let express = require('express');
let cors = require('cors');
let api = require('./api/api');
let config = require('./config');
let bodyParser = require('body-parser');

printConfig();

let app = express();
let server = http.createServer(app);


app.use(cors());
app.use(bodyParser.json());
app.use('/api', api());

server.listen(9090, () => {
	console.log('Listening to http://localhost:9090');
});

function printConfig() {
	console.log(`Loaded configuration`);
	console.log(`Will connect to MySQL instance on ${config.get('db:host')}`);
}