import { combineReducers } from 'redux';
import questionsReducer from './reducer_questions';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
	questions: questionsReducer,
	routing: routerReducer
});

export default rootReducer;