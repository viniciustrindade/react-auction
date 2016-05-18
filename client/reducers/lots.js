'use strict';

function lots(state = [], action) {

	switch(action) {
		case 'BID':
			console.log(`Bidding ${i}`);
			const i = action.index;
			const price = action.price;
			return [
				...state.slice(0, i),
				{...state[i], price},
				...state.slice(i + 1)
			];

		default:
			return state;

	}
}

export default lots;