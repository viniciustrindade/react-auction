'use strict';

const express = require('express');
const lotsRouter = require('./lot');

const pool = require('../../dao/pool.js');
const AuctionStore = require('../../store/AuctionStore');
const store = new AuctionStore(pool);

module.exports = () => {
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

	let router = express.Router({mergeParams: true});
	router
		.route('/')
		.get((req, res) => {
			store.getAllAuctions(handleDbResponse(res));
		})
		.post((req, res) => {
			store.addAuction(req.body, handleDbResponse(res));
		});

	router
		.route('/:aucId')
		.get((req, res) => {
			const aucId = +req.params.aucId;
			store.getAuction(aucId, handleDbResponse(res));
		})
		.put((req, res) => {
			const obj = req.body;
			obj.id = +req.params.aucId;
			store.updateAuction(obj, handleDbResponse(res));
		})
		.delete((req, res) => {
			const id = +req.params.aucId;
			store.deleteAuction(id, handleDbResponse(res));
		});

	router.use('/:aucId/lot', lotsRouter());

	return router;
};
