import React from 'react';
import ReactDOM from "react-dom";
import { Router, useRouterHistory, browserHistory } from 'react-router';
import routes from './config/routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux'

const store = createStore(allReducers);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
    document.getElementById('app')
);