var data = [{
	"id": 1,
	"question": "1Supa dupa question ?",
	"correct": 1,
	"answers": [{
		"id": 0,
		"answer": "Lorem ipsum a" 
	}, {
		"id": 1,
		"answer": "7Lorem ipsum b" 
	}, {
		"id": 2,
		"answer": "Lorem ipsum c" 
	}],
	"selected_answer" : ""
}, {
	"id": 2,
	"question": "2Yuga zubi question ?",
	"correct": 3,
	"answers": [{
		"id": 0,
		"answer": "zLorem ipsum a" 
	}, {
		"id": 1,
		"answer": "xzLorem ipsum b" 
	}, {
		"id": 2,
		"answer": "zxLorem ipsum c" 
	}, {
		"id": 3,
		"answer": "zxLorem ipsum d" 
	}],
	"selected_answer" : ""
}, {
	"id": 3,
	"question": "3Lopa zapa question ?",
	"correct": 0,
	"answers": [{
		"id": 0,
		"answer": "weLorem ipsum al" 
	}, {
		"id": 1,
		"answer": "xLorem ipsum bel" 
	}, {
		"id": 2,
		"answer": "xLorem ipsum cel" 
	}],
	"selected_answer" : ""
}];

function questionsReducer (state=data, action) {

	switch (action.type) {

		case 'ADD_ANSWER':

			var qid = action.payload.question_id;
			var aid = action.payload.answer_id;
			var questions = state.slice();
			var questionIndex = questions.findIndex((question) => question.id === qid);
			var question = Object.assign({}, questions[questionIndex], {
			  selected_answer: aid,
			});

			console.log('qid', qid);
			console.log('aid', aid);
			console.log('questions', questions);
			console.log('questionIndex', questionIndex);
			console.log('question', question);

			questions[questionIndex] = question;

			return state;

		default:

			return state;

	}

}

export default questionsReducer;