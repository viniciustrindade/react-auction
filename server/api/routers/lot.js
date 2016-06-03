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
			store.addLot(lot, handleDbResponse(res));
		});

	router
		.route('/:lotId')
		.get((req, res) => {
			const aucId = +req.params.aucId;
			const lotId = +req.params.lotId;
			store.getLot(aucId, lotId, handleDbResponse(res));
		})
		.put((req, res) => {
			const obj = req.body;
			obj.auction_id = +req.params.aucId;
			obj.id = +req.params.lotId;
			store.updateLot(obj, handleDbResponse(res));
		})
		.delete((req, res) => {
			const aucId = +req.params.aucId;
			const lotId = +req.params.lotId;
			store.deleteLot(aucId, lotId, handleDbResponse(res));
		});

	router.use('/:lotId/bid', bidsRouter);

	return router;
};
