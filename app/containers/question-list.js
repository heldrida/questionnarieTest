import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAnswer } from '../actions/index';

class QuestionList extends Component {

	createQuestionList() {
		return this.props.questions.map((question) => {
			let list = question.answers.map((answer) => {
				return (
					<li 
						key={ answer.id }
						onClick={ () => this.props.selectAnswer(answer.id) }
					>
					{ answer.answer }
					</li>
				)
			});
			return list;
		});
	}

	render() {
		return (
			<ul>
				{ this.createQuestionList() }		
			</ul>
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