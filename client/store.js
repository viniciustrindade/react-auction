import {createStore, compose} from 'redux';

import {syncHistoryWithStore} from 'react-router-redux';

import {browserHistory} from 'react-router';

// import the root reducer

import rootReducer from './reducers/index';

import lots from './data/lots';
import users from './data/users';

// create an object for default data

const defaultState = {
	lots,
	users
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;