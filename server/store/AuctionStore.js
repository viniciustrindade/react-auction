'use strict';

const AbstractStore = require('./AbstractStore');

class AuctionStore extends AbstractStore {
	constructor(pool) {
		super(pool, 'auctions', ['name', 'code']);
	}
}

module.exports = AuctionStore;