import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import selectQuestionReducer from './selectQuestionReducer';
import setQuestionIdReducer from './setQuestionIdReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
	questions: questionsReducer,
	routing: routerReducer,
	selected_question: selectQuestionReducer,
	question_id: setQuestionIdReducer
});

export default allReducers;