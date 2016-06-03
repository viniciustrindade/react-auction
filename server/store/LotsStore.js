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
		const values = [lot.name, lot.description, lot.price,
			lot.image_url, lot.auction_id, lot.seller_id, lot.id];
		this._pool.query(
			'UPDATE lots SET name = ?, description = ?, price = ?, ' +
			'image_url = ?, auction_id = ?, seller_id = ? ' +
			'WHERE id = ?', values,
			(err, res) => {
				if (err) {
					return cb(err);
				}

				cb(null, res);
			});
	}

	getLot(aucId, lotId, cb) {
		this._pool.query('SELECT * FROM lots WHERE id = ?', [lotId], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}

	deleteLot(aucId, lotId, cb) {
		this._pool.query('DELETE FROM lots WHERE id = ?', [lotId], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}
}

module.exports = LotsStore;