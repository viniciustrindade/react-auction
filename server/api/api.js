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

const userRouter = require('./routers/user')();
const auctionRouter = require('./routers/auction')();

module.exports = () => {
	let router = express.Router({mergeParams: true});

	router.use('/user', userRouter);
	router.use('/auc', auctionRouter);

	router
		.route('/')
		.get((req, res) => {
			res.send('API v0.0.1');
		});

	return router;
};