'use strict';

class AbstractStore {

	constructor(pool, table, updateFields) {
		this._pool = pool;
		this._table = table;
		this._updateFields = updateFields;
	}

	getAll(cb) {
		this._pool.query(`SELECT * FROM ${this._table}`, (err, rows, fields) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}

	addOne(obj, cb) {
		this._pool.query(`INSERT INTO ${this._table} SET ?`, obj,
			(err, result) => {
				if (err) {
					return cb(err);
				}

				obj.id = result.insertId;
				cb(null, obj);
			});
	}

	updateOne(obj, cb) {
		const fields = this._updateFields;
		let query = `UPDATE ${this._table} SET `;
		query += fields.map((field) => {
			return field + ' = ? '
		}).join(',');

		query += ' WHERE id = ?';

		const values = fields.map((f) => obj[f]);
		values.push(obj.id);

		this._pool.query(query, values,
			(err, res) => {
				if (err) {
					return cb(err);
				}

				cb(null, obj);
			});
	}

	getOne(id, cb) {
		this._pool.query(`SELECT * FROM ${this._table} WHERE id = ?`, [id], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}

	deleteOne(id, cb) {
		this._pool.query(`DELETE FROM ${this._table} WHERE id = ?`, [id], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}
}

module.exports = AbstractStore;