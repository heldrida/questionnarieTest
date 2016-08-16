import { FETCH_QUESTIONS } from '../actions/index';

const INITIAL_STATE = {
	loading: true,
	list: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_QUESTIONS:
			return Object.assign({}, state, {
				loading: false,
				list: action.payload
			});
		break;
		default:
			return state;
	}
};