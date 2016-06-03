'use strict';

class BidsStore {

	constructor(pool) {
		this._pool = pool;
	}

	getAllBids(aucId, lotId, cb) {
		this._pool.query(
			'SELECT * FROM bids WHERE lot_id = ?',
			[lotId],
			(err, rows) => {
				if (err) {
					return cb(err);
				}

				cb(null, rows);
			}
		);
	}

	addBid(bid, cb) {
		this._pool.query('INSERT INTO bids SET ?', bid,
			(err, result) => {
				if (err) {
					return cb(err);
				}

				bid.id = result.insertId;
				cb(null, bid);
			});
	}

	getBid(aucId, lotId, bidId, cb) {
		this._pool.query('SELECT * FROM bids WHERE id = ?', [bidId], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}
}

module.exports = BidsStore;