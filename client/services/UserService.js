'use strict';

import users from '../data/users';

export default class UserService {

	constructor() {

	}

	getUsers() {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(users), 1000);
		});
	}

	addUser() {

	}
}