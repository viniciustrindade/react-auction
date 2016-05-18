'use strict';

function lots(state = [], action) {

	switch(action.type) {
		case 'BID':
		{
			const i = action.index;
			const price = action.price;
			return [
				...state.slice(0, i),
				{...state[i], price},
				...state.slice(i + 1)
			];
		}

		case 'PLACE_LOT':
		{
			const {name, id, code, price, image} = action;
			return [
				...state,
				{name, id, code, price, image}
			];
		}

		default:
			return state;

	}
}

export default lots;