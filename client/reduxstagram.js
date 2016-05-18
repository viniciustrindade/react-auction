// let's go!

import React from 'react';
import {render} from 'react-dom';

import css from './styles/style.styl';

// import components

import Main from './components/Main';
import SingleLot from './components/SingleLot';
import LotGrid from './components/LotGrid';

// router
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Provider } from 'react-redux';

import store, {history} from './store'

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={LotGrid} />
				<Route path="/lot/:lotId" component={SingleLot} />
			</Route>
		</Router>
	</Provider>
);

render(router, document.getElementById('root'));