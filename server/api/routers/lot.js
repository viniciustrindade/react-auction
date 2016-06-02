'use strict';

const express = require('express');

const bidsRouter = require('./bid')();
const pool = require('../../dao/pool.js');
const LotsStore = require('../../store/LotsStore');

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
			store.getAllLots(aucId, handleDbResponse(res));
		})
		.post((req, res) => {
			const aucId = +req.params.aucId;
			const lot = req.body;
			lot.auction_id = aucId;
			store.addLot(req.body, handleDbResponse(res));
		});

	router.use('/:lotId/bid', bidsRouter);

	return router;
};
