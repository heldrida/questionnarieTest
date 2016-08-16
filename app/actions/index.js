import data from '../data/questions.js';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';

export function fetchQuestions() {

	// Fake the http get request
	let promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(data);
		}, 1200);
	});

	return {
		type: FETCH_QUESTIONS,
		payload: promise
	};
}