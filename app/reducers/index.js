import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
// import answersReducer from './answersReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
	questions: questionsReducer,
	routing: routerReducer,
	// answersReducer: answersReducer
});

export default allReducers;