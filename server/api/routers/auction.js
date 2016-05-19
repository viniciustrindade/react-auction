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

	router
		.route('/:aucId')
		.get((req, res) => {
			const aucId = +req.params.aucId;

			const auctionDetails = auctions.find((auc) => auc.id === aucId);
			res.json(auctionDetails);
		});


	router.use('/:aucId/lot', lotsRouter());

	return router;
};
