import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAnswer } from '../actions/index';
import _ from 'lodash';

class QuestionList extends Component {
	constructor(props) {
		super(props);
	}

	getQuestion(id) {

		let question = _.find(this.props.questions, function (question) {
			return question.id == id;
		});

		return question.question;
	}

	createAnswerList(id) {
		let list = null;
		let question = _.find(this.props.questions, function (question) {
			return question.id == id;
		});

		if (question) {

			list = question.answers.map((answer) => {
				return (
						<li 
							key={ answer.id }
							onClick={ () => this.props.selectAnswer(answer.id) }
						>
						{ answer.answer }
						</li>
				)
			});

		}

		return list;
	}

	render() {
		return (
			<div>
				<h2>{ this.getQuestion(this.props.question_id) }</h2>	
				<ul>
				{ this.createAnswerList(this.props.question_id) }
				</ul>
			</div>
		);
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		selectAnswer: selectAnswer
	}, dispatch);
}

export default connect(false, matchDispatchToProps)(QuestionList);