import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import lots from './lots.js';

const rootReducer = combineReducers({posts, comments, lots,
	routing: routerReducer});

export default rootReducer;