import data from '../data/questions.js';

export const selectAnswer = (answer) => {

	console.log("answer", answer);

	return {
		type: "ADD_ANSWER",
		payload: answer
	}

};

export const fetchData = () => {

	console.log("FETCH_DATA call");

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

	console.log("SET_DATA Call!");
	console.log(data);
	return {
		type: "SET_DATA",
		payload: data
	};

};