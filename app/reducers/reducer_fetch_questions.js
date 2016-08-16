import { FETCH_QUESTIONS, SET_ACTIVE_QUESTION_ID } from '../actions/index';

const INITIAL_STATE = {
	loading: true,
	list: [],
	action_question_id: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_QUESTIONS:
			return Object.assign({}, state, {
				loading: false,
				list: action.payload
			});
		break;
		case SET_ACTIVE_QUESTION_ID:
			return Object.assign({}, state, {
				action_question_id: action.payload
			});
		break;
		default:
			return state;
	}
};