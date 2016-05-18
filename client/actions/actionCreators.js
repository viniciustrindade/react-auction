// increment

export function placeLot(name, price) {
	return {
		type: 'PLACE_LOT',
		name,
		price,
		id: (Math.random() * 100) | 0,
		code: 'abc' + (Math.random() * 100) | 0,
		image: '/img/img-1.jpg'
	}
}

export function setLots(lots) {
	return {
		type: 'SET_LOTS',
		lots
	}
}

export function setUsers(users) {
	return {
		type: 'SET_USERS',
		users
	}
}

export function bid(index, price) {
	return {
		type: 'BID',
		index,
		price
	}
}

export function addUser(name, bank) {
	return {
		type: 'ADD_USER',
		name,
		bank
	}
}