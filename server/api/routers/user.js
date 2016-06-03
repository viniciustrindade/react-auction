'use strict';

const express = require('express');

const pool = require('../../dao/pool.js');
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
			store.getAllUsers(handleDbResponse(res));
		})
		.post((req, res) => {
			store.addUser(req.body, handleDbResponse(res));
		});

	router
		.route('/:userId')
		.get((req, res) => {
			const userId = +req.params.userId;
			store.getUser(userId, handleDbResponse(res));
		})
		.put((req, res) => {
			const obj = req.body;
			obj.id = +req.params.userId;
			store.updateUser(obj, handleDbResponse(res));
		})
		.delete((req, res) => {
			const userId = +req.params.userId;
			store.deleteUser(userId, handleDbResponse(res));
		});

	return router;
};
