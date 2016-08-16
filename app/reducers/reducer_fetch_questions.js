import { FETCH_QUESTIONS, SET_ACTIVE_QUESTION } from '../actions/index';
console.log('>>> SET_ACTIVE_QUESTION', SET_ACTIVE_QUESTION);
const INITIAL_STATE = {
	loading: true,
	list: [],
	active_question_id: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_QUESTIONS:
			return Object.assign({}, state, {
				loading: false,
				list: action.payload
			});
		break;
		case SET_ACTIVE_QUESTION:
			return Object.assign({}, state, {
				active_question_id: action.payload
			});
		break;
		default:
			return state;
	}
};