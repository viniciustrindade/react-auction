'use strict';

function lots(state = [], action) {

	switch(action.type) {
		case 'ADD_USER':
		{
			const {name, bank} = action;
			const id = (Math.random()*1000 | 0);
			return [
				...state,
				{id, name, bank}
			];
		}

		case 'SET_USERS':
		{
			return [
				...action.users
			];
		}

		default:
			return state;

	}
}

export default lots;