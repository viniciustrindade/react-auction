'use strict';

class AuctionStore {

	constructor(pool) {
		this._pool = pool;
	}

	getAllAuctions(cb) {
		this._pool.query(ALL_AUCTIONS_QUERY, (err, rows, fields) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}

	addAuction(auction, cb) {
		this._pool.query('INSERT INTO auctions SET ?', auction,
			(err, result) => {
				if (err) {
					return cb(err);
				}

				auction.id = result.insertId;
				cb(null, auction);
		});
	}

	updateAuction(auction, cb) {
		const values = [auction.name, auction.code, auction.id];
		this._pool.query('UPDATE auctions SET name = ?, code = ? WHERE id = ?', values,
			(err, res) => {
				if (err) {
					return cb(err);
				}

				cb(null, auction);
			});
	}

	getAuction(id, cb) {
		this._pool.query('SELECT * FROM auctions WHERE id = ?', [id], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}

	deleteAuction(id, cb) {
		this._pool.query('DELETE FROM auctions WHERE id = ?', [id], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}
}

const ALL_AUCTIONS_QUERY = 'SELECT * FROM auctions';

module.exports = AuctionStore;