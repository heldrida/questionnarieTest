'use strict';

import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
	<Router history={hashHistory}>
	</Router>
);

export default routes;