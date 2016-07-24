export const selectAnswer = (answer) => {
	console.log("answer", answer);
	return {
		type: "ANSWER_SELECTED",
		payload: answer
	}
};