'use strict';

class AuctionStore {

	constructor(pool) {
		this._pool = pool;
	}

	getAllAuctions(cb) {
		console.log('Getting all auctions');
		this._pool.query(ALL_AUCTIONS_QUERY, (err, rows, fields) => {
			if (err) {
				cb(err);
			}

			cb(null, rows);
		});

		// this._pool.getConnection((err, conn) => {

		// });
	}

	getAuction() {

	}
}

const ALL_AUCTIONS_QUERY = 'SELECT * FROM auctions';

module.exports = AuctionStore;