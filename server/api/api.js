/**
 * Endpoints:
 *
 *
 * 
 * /api/auc
 *  GET: list of registered auctions
 *  POST: add new auction
 *
 * /api/auc/:aucId
 * 	GET: get information about the given auc
 * 	PUT: update auc info
 * 	DELETE: kill the auc
 *
 * /api/auc/:aucId/lot
 *	GET: list all lots (pagination)
 *	POST: add new lot
 *
 * /api/auc/:aucId/lot/:lotId
 * 	GET: get item description
 * 	PUT: update lot details or description
 *
 * /api/auc/:aucId/lot/:lotId/bid
 * 	GET: list the bids for this lot
 * 	POST: new bid
 *
 * /api/auc/:aucId/lot/:lotId/bid/:bidId
 *
 * 	GET: show bid details
 *
 */

const express = require('express');

const users = require('./data/users');

module.exports = () => {
	let router = express.Router();

	router
		.route('/')
		.get((req, res) => {
			res.send('API v0.0.1');
		});

	router.route('/user')
		.get((req, res) => {
			res.json(users);
		});

	router.route('/user/:userId')
		.get((req, res) => {
			res.json({result: 'ok'});
		});

	router.route('/auc')
		.get((req, res) => {
			res.json({result: 'ok'});
		});

	router.route('/auc/:aucId')
		.get((req, res) => {
			res.json({result: 'ok'});
		});

	router.route('/auc/:aucId/lot')
		.get((req, res) => {
			res.json({result: 'ok'});
		});

	router.route('/auc/:aucId/lot/:lotId')
		.get((req, res) => {
			res.json({result: 'ok'});
		});

	router.route('/auc/:aucId/lot/:lotId/bid')
		.get((req, res) => {
			res.json({result: 'ok'});
		});

	router.route('/auc/:aucId/lot/:lotId/bid/:bidId')
		.get((req, res) => {
			res.json({result: 'ok'});
		});

	return router;
};