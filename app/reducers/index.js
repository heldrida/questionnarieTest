import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';

const allReducers = combineReducers({
	questions: questionsReducer
});

export default allReducers;