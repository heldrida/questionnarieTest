export const selectAnswer = (answer) => {
	console.log("answer", answer);
	return {
		type: "ADD_ANSWER",
		payload: answer
	}
};