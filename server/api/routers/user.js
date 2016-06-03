'use strict';

const express = require('express');

const pool = require('../../db/pool.js');
const UserStore = require('../../store/UserStore');
const store = new UserStore(pool);

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
			store.getAll(handleDbResponse(res));
		})
		.post((req, res) => {
			store.addOne(req.body, handleDbResponse(res));
		});

	router
		.route('/:userId')
		.get((req, res) => {
			const userId = +req.params.userId;
			store.getOne(userId, handleDbResponse(res));
		})
		.put((req, res) => {
			const obj = req.body;
			obj.id = +req.params.userId;
			store.updateOne(obj, handleDbResponse(res));
		})
		.delete((req, res) => {
			const userId = +req.params.userId;
			store.deleteOne(userId, handleDbResponse(res));
		});

	return router;
};
