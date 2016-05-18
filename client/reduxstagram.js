// let's go!

import React from 'react';
import {render} from 'react-dom';

import css from './styles/style.styl';

// import components

import App from './components/App';
import LotDetails from './components/LotDetails';
import LotGrid from './components/LotGrid';
import PlaceLot from './components/PlaceLot';
import Users from './components/users/Users';
import UserDetails from './components/users/UserDetails';

// router
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Provider } from 'react-redux';

import store, {history} from './store'

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={LotGrid} />
				<Route path="/lot/:code" component={LotDetails} />
				<Route path="/new-lot" component={PlaceLot} />
				<Route path="/users" component={Users} />
				<Route path="/users/:userId" component={UserDetails} />
			</Route>
		</Router>
	</Provider>
);

render(router, document.getElementById('root'));