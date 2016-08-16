import data from '../data/questions.js';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SET_ACTIVE_QUESTION = 'SET_ACTIVE_QUESTION';
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER';

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
	}
}

export function setActiveQuestion(question_id) {
	return {
		type: SET_ACTIVE_QUESTION,
		payload: question_id
	}
}

export function setQuestionAnswer(question_id, answer_id) {

	// Fake the http post request
	let promise = new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve({
				question_id: question_id,
				answer_id: answer_id
			});
		}, 400);
	});

	return {
		type: SET_QUESTION_ANSWER,
		payload: promise
	}
}