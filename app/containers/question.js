import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setActiveQuestion, setQuestionAnswer } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Navbar from '../containers/navbar';

class Question extends Component {
	constructor(props) {
		super(props);
		this.getClassName = this.getClassName.bind(this);
	}

	componentWillMount() {
		this.props.setActiveQuestion(this.props.question_id);
	}

    componentWillReceiveProps(nextProps) {
		if (this.props.question_id != nextProps.question_id) {
			this.props.setActiveQuestion(nextProps.question_id);
		}
    }

	setAnswer(answer_id) {
		let question_id = this.props.question.id;
		this.props.setQuestionAnswer(question_id, answer_id);
	}

	getClassName(answers, item_answer_id) {

		let classes = [];

		// find the answer for the active question
		let answer_index = _.findIndex(answers, (answer) => {
			return answer.question_id === this.props.question.id;
		});

		// if there's no answer yet, skip class placement
		if (answer_index === -1) {
			return;
		}

		let answer = answers[answer_index];

		// Test cases
		const isUserCorrect = () => {
			return answer.answer_id == answer.correct_answer_id && item_answer_id == answer.correct_answer_id
		}

		const isUserAnswer = () => {
			return answer.answer_id === item_answer_id;
		}

		const isCorrectAnswer = () => {
			return item_answer_id == answer.correct_answer_id;
		}

		// Test and set the correct case classname for styling
		if (isUserCorrect()) {
			classes.push('user_correct_answer');
		}

		if (isUserAnswer()) {
			classes.push('user_answer');
		}

		if (isCorrectAnswer()) {
			classes.push('correct_answer');
		}

		return classes.length > 0 ? classes.join(' ') : '';

	}

	answersList() {
		return this.props.question.answers.map((answer) => {
			return <li className={ this.getClassName(this.props.answers, answer.id) } key={ answer.id } onClick={ () => this.setAnswer(answer.id) }>{ answer.text }</li>
		});
	}

	render() {
		return (
			<div>
				<div className='question-container'>
					<h2>{ this.props.question && this.props.question.question }</h2>
					<ul>
					{
						this.props.question &&
						this.answersList()
					}
					</ul>
				</div>
				<Navbar />
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		question_id: ownProps.params.question_id,
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

export default connect(mapStateToProps, matchDispatchToProps)(Question);