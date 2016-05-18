'use strict';

import lots from '../data/lots';

export default class LotService {

	constructor() {

	}

	getLots() {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(lots), 1000);
		});
	}

	addLot() {

	}

	addBid() {

	}
}