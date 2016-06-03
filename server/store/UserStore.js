'use strict';

const AbstractStore = require('./AbstractStore');

class UserStore extends AbstractStore {

	constructor(pool) {
		super(pool, 'users', ['name', 'description',
			'img_big', 'img_small', 'balance']);
		this._pool = pool;
	}
}

module.exports = UserStore;