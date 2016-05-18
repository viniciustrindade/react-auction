import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import lots from './lots';
import users from './users'

const rootReducer = combineReducers({
	lots,
	users,
	routing: routerReducer
});

export default rootReducer;