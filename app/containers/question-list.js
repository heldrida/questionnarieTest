import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAnswer } from '../actions/index';
import _ from 'lodash';

class QuestionList extends Component {
	constructor(props) {
		super(props);
		this.properties(props);
	}

	properties(props) {
		this.question_id = props.params.question_id;
	}

	getQuestion(id) {

		let q = _.find(this.props.questions, (o) => { 
			return o.id < id;
		});

		return q;
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
		let qid = this.question_id;

		return (
			<div>
				<h2>{ this.getQuestion(qid) }</h2>	
				<ul>
				{ this.createAnswerList(qid) }
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		questions: state.questions
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		selectAnswer: selectAnswer
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(QuestionList);