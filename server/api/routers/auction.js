'use strict';

const express = require('express');

const auctions = require('../data/auctions');
const lotsRouter = require('./lot');

module.exports = () => {
	let router = express.Router({mergeParams: true});
	router
		.route('/')
		.get((req, res) => {
			res.json(auctions);
		});

	router.use('/:aucId/lot', lotsRouter());

	return router;
};
