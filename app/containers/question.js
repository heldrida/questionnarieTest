import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setActiveQuestion, setQuestionAnswer } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class Question extends Component {
	componentWillMount() {
		this.setEventListeners();
		this.setState({
			'myClassName': ''
		});
	}

	setEventListeners() {
		this.props.router.listen(() => {
			let question_id = this.props.params.question_id;
			this.props.setActiveQuestion(question_id);
		});
	}

	setAnswer(answer_id) {
		let question_id = this.props.question.id;
		let promise = this.props.setQuestionAnswer(question_id, answer_id);
		promise.then((res) => {
			this.getClassName(res);
		});
	}

	getClassName(res) {

		let myClassName = '';

		myClassName += res.answer_id === res.correct_answer_id && (' ' + 'correct');

		this.setState({
			'myClassName': myClassName
		});
	}

	answersList() {
		return this.props.question.answers.map((answer) => {
			return <li className={ this.state.myClassName } key={ answer.id } onClick={ () => this.setAnswer(answer.id) }>{ answer.text }</li>
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