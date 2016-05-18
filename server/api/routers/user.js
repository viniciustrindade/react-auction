'use strict';

const express = require('express');

const users = require('../data/users');

module.exports = () => {
	let router = express.Router({mergeParams: true});

	router
		.route('/')
		.get((req, res) => {
			res.json(users);
		});

	return router;
};
