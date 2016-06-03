'use strict';

const express = require('express');

const pool = require('../../dao/pool.js');
const LotsStore = require('../../store/BidsStore');
const store = new LotsStore(pool);

const handleDbResponse = (res) => {
	return (err, data) => {
		if (err) {
			res.status(400);
			res.json(err);
			return;
		}

		res.json(data);
	}
};

module.exports = () => {
	let router = express.Router({mergeParams: true});

	router
		.route('/')
		.get((req, res) => {
			const aucId = +req.params.aucId;
			const lotId = +req.params.lotId;
			store.getAllBids(aucId, lotId, handleDbResponse(res));
		})
		.post((req, res) => {
			const aucId = +req.params.aucId;
			const lotId = +req.params.lotId;

			const bid = req.body;
			bid.lot_id = lotId;
			store.addBid(bid, handleDbResponse(res));
		});

	router
		.route('/:bidId')
		.get((req, res) => {
			const aucId = +req.params.aucId;
			const lotId = +req.params.lotId;
			const bidId = +req.params.bidId;
			store.getBid(aucId, lotId, bidId, handleDbResponse(res));
		});

	return router;
};
