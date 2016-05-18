import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import lots from './lots.js';

const rootReducer = combineReducers({
	lots,
	routing: routerReducer
});

export default rootReducer;