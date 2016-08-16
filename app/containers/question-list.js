import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAnswer, selectQuestion } from '../actions/index';
import _ from 'lodash';

class QuestionList extends Component {
	constructor(props) {
		super(props);
	}
 
	componentWillMount() {
		this.props.selectQuestion({
			question_id: this.props.question_id,
			questions: this.props.questions
		});
	}

	createAnswerList(id) {

		return this.props.selected_question.answers.map((answer) => {
			return (
					<li 
						key={ answer.id }
						onClick={ () => this.props.selectAnswer({
							question_id: this.props.question_id,
							answer_id: answer.id
						}) }
					>
					{ answer.answer }
					</li>
			)
		});

	}

	render() {
		return (
			<div>
				<h2>{ this.props.selected_question.question }</h2>	
				<ul>
				{ this.createAnswerList(this.props.question_id) }
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	console.log("state.selected_question", state.selected_question);
	return {
		questions: state.questions,
		selected_question: state.selected_question
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		selectAnswer: selectAnswer,
		selectQuestion: selectQuestion
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(QuestionList);