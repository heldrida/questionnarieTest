import data from '../data/questions.js';

export const selectAnswer = (answer) => {

	return {
		type: "ADD_ANSWER",
		payload: answer
	}

};

export const selectQuestion = (question) => {

	return {
		type: "SELECT_QUESTION",
		payload: question
	};

};

export const setQuestionId = (question_id) => {

	return {
		type: "SET_QUESTION_ID",
		payload: {
			question_id: question_id
		}
	};

};

export const fetchData = () => {

    let promise = new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve(data);
			}, 800);
    });

	return {
		type: "FETCH_DATA",
		payload: promise
	};

};

export const setData = (data) => {

	return {
		type: "SET_DATA",
		payload: data
	};

};

export const dataReady = () => {

	return {
		type: "DATA_READY",
		payload: true
	};

};