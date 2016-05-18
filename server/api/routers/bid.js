'use strict';

const express = require('express');
const bids = require('../data/bids');

module.exports = () => {
	let router = express.Router({mergeParams: true});

	router
		.route('/')
		.get((req, res) => {
			res.json(bids);
		});

	return router;
};