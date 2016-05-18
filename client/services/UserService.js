'use strict';

const API = 'http://localhost:9090/api/user';

export default class UserService {

	constructor() {

	}

	getUsers() {
		return new Promise((resolve, reject) => {
			const req = new XMLHttpRequest();
			req.addEventListener('load', () => {
				const users = JSON.parse(req.responseText);
				resolve(users);
			});

			req.addEventListener('error', reject);
			req.open('GET', API);
			req.send();
		});
	}

	addUser() {

	}
}