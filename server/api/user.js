'use strict';

const express = require('express');

module.exports = () => {
	let router = express.Router();

	router
		.route('/')
		.get((req, res) => {
			req.send('USER API');
		});
	
	

	return router;
};
