import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
	questions: questionsReducer,
	routing: routerReducer
});

export default allReducers;