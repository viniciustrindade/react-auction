'use strict';

const express = require('express');

const bidsRouter = require('./bid')();
const lots = require('../data/lots');


module.exports = () => {
	let router = express.Router({mergeParams: true});

	router
		.route('/')
		.get((req, res) => {
			res.json(lots);
		});

	router.use('/:lotId/bid', bidsRouter);

	return router;
};
