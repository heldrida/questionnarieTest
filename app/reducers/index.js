import { combineReducers } from 'redux';
import fetchQuestionsReducer from './reducer_fetch_questions';

const rootReducer = combineReducers({
	questions: fetchQuestionsReducer,
	selected_question: null
});

export default rootReducer;