import _ from 'lodash';

function selectQuestionReducer (state=[], action) {

	switch (action.type) {

		case 'SELECT_QUESTION':
			var qid = action.payload.question_id;
			var questions = action.payload.questions;
			var index = _.findIndex(questions, function (question) {
				return question.id === parseInt(qid);
			});

			console.log('action', action);
			console.log('questions', questions);
			console.log('index', index);
			console.log('questions[index]: ', questions[index]);
			console.log("[questions[index], ...state]", [questions[index], ...state]);
			
			return [questions[index], ...state];

		break;

	}

	return state;

}

export default selectQuestionReducer;