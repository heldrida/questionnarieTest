import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setActiveQuestion, setQuestionAnswer } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class Question extends Component {
	componentWillMount() {
		this.setEventListeners();
	}

	setEventListeners() {
		this.props.router.listen(() => {
			let question_id = this.props.params.question_id;
			this.props.setActiveQuestion(question_id);
		});
	}

	setAnswer(answer_id) {
		console.log("Question => onClick LI => setAnswer => param:answer_id: " + answer_id + ", question_id: " + this.props.question.id);
		let question_id = this.props.question.id;
		this.props.setQuestionAnswer(question_id, answer_id);
		console.log('this.props.answers', this.props.answers);
	}

	answersList() {
		return this.props.question.answers.map((answer) => {
			return <li key={ answer.id } onClick={ () => this.setAnswer(answer.id) }>{ answer.text }</li>
		});
	}

	render() {
		return (
			<div>
				{
					this.props.question &&
					this.answersList()
				}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	console.log('question.js state: ', state);
	return {
		question: state.questions.active,
		answers: state.answers
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		setActiveQuestion: setActiveQuestion,
		setQuestionAnswer: setQuestionAnswer
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Question));