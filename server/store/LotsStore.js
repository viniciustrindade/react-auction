'use strict';

class LotsStore {

	constructor(pool) {
		this._pool = pool;
	}

	getAllLots(aucId, cb) {
		this._pool.query(
			'SELECT * FROM lots WHERE auction_id = ?',
			[aucId],
			(err, rows) => {
				if (err) {
					return cb(err);
				}

				cb(null, rows);
			}
		);
	}

	addLot(lot, cb) {
		this._pool.query('INSERT INTO lots SET ?', lot,
			(err, result) => {
				if (err) {
					return cb(err);
				}

				lot.id = result.insertId;
				cb(null, lot);
			});
	}

	updateLot(lot, cb) {
		const values = [lot.name, lot.price, lot.id];
		this._pool.query('UPDATE auctions SET name = ?, price = ? WHERE id = ?', values,
			(err, res) => {
				if (err) {
					return cb(err);
				}

				cb(null, res);
			});
	}

	getLot(id, cb) {
		this._pool.query('SELECT * FROM lots WHERE id = ?', [id], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}

	deleteLot(id, cb) {
		this._pool.query('DELETE FROM lots WHERE id = ?', [id], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}
}

module.exports = LotsStore;