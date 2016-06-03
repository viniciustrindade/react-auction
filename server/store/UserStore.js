'use strict';

class UserStore {

	constructor(pool) {
		this._pool = pool;
	}

	getAllUsers(cb) {
		this._pool.query('SELECT * FROM users', (err, rows, fields) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}

	addUser(user, cb) {
		this._pool.query('INSERT INTO users SET ?', user,
			(err, result) => {
				if (err) {
					return cb(err);
				}

				user.id = result.insertId;
				cb(null, user);
			});
	}

	updateUser(user, cb) {
		const values = [user.name, user.description,
			user.img_big, user.img_small,
			user.balance, user.id];
		this._pool.query('UPDATE users SET name = ?, description = ?, ' +
			'img_big = ?, img_small = ?, balance = ? ' +
			'WHERE id = ?', values,
			(err, res) => {
				if (err) {
					return cb(err);
				}

				cb(null, user);
			});
	}

	getUser(id, cb) {
		this._pool.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}

	deleteUser(id, cb) {
		this._pool.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
			if (err) {
				return cb(err);
			}

			cb(null, rows);
		});
	}
}

module.exports = UserStore;