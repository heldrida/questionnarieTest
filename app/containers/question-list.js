import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAnswer } from '../actions/index';
import _ from 'lodash';

class QuestionList extends Component {
	constructor(props) {
		super(props);
	}
 
	componentWillMount() {

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
	return {
		selected_question: _.find(ownProps.questions, function (question) {
			return question.id == ownProps.question_id;
		})
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		selectAnswer: selectAnswer,
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(QuestionList);