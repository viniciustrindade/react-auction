'use strict';

const express = require('express');

const auctions = require('../data/auctions');
const lotsRouter = require('./lot');

const pool = require('../../dao/pool.js');
const AuctionStore = require('../../store/AuctionStore');
const auctionStore = new AuctionStore(pool);

module.exports = () => {
	let router = express.Router({mergeParams: true});
	router
		.route('/')
		.get((req, res) => {
			auctionStore.getAllAuctions((err, data) => {
				res.json(data);
			});
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
