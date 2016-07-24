import React from 'react';
import ReactDOM from "react-dom";
import { Router, useRouterHistory } from 'react-router';
import routes from './config/routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import { createHashHistory } from 'history';

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
    document.getElementById('app')
);