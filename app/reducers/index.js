import { combineReducers } from 'redux';
import fetchQuestionsReducer from './reducer_fetch_questions';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
	questions: fetchQuestionsReducer,
	routing: routerReducer
});

export default rootReducer;