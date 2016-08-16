import _ from 'lodash';

function setQuestionIdReducer (state=[], action) {

	switch (action.type) {

		case 'SELECT_QUESTION':
			var qid = action.payload.question_id;
			return [qid, ...state];

		break;

	}

	return state;

}

export default setQuestionIdReducer;