'use strict';

const express = require('express');
const lotsRouter = require('./lot');

const pool = require('../../dao/pool.js');
const AuctionStore = require('../../store/AuctionStore');
const store = new AuctionStore(pool);

module.exports = () => {
	let router = express.Router({mergeParams: true});
	router
		.route('/')
		.get((req, res) => {
			store.getAllAuctions((err, data) => {
				res.json(data);
			});
		})
		.post((req, res) => {
			store.addAuction(req.body, (err, auction) => {
				if (err) {
					res.status(400);
					res.json(err);
					return;
				}

				res.json(auction);
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
