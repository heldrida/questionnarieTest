import _ from 'lodash';

function questionsReducer (state={}, action) {

	switch (action.type) {

		case 'SET_DATA':

			return action.payload;

		case 'ADD_ANSWER':

			// set the selected answer without mutating the original object
			var qid = action.payload.question_id;
			var aid = action.payload.answer_id;
			var questions = state.slice();
			var index = _.findIndex(questions, function (question) {
				return question.id === parseInt(qid);
			});
			var question = Object.assign({}, questions[index], {
			  selected_answer: aid,
			});

			questions[index] = question;

			return questions;

		//case 'FETCH_DATA':
		default:

			return state;

	}

}

export default questionsReducer;