import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import QuestionList from '../containers/question-list.js';

const routes = (
	<Route path='/' component={App}>
	    <Route path="/question/:question_id"
           component={ QuestionList } />
	</Route>
);

export default routes;