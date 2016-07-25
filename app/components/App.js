import React, { Component } from 'react';
import QuestionList from '../containers/question-list.js';
import StartPanel from './StartPanel.js';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

require('../../src/sass/app.scss');

class App extends Component {
	constructor(props) {
		super(props);
		this.question_id = parseInt(this.props.params.question_id) || 0;
		console.log(props);
	}

	getPreviousParam() {
		let param;
		param = Math.max(0, this.question_id - 1);
		return param;
	}

	getNextParam() {
		let param;
		param = this.question_id + 1;
		return param;
	}

	render() {
		return (
			<div>
				<div>
					{ this.props.children ? (
						this.props.children
					) : (
						<StartPanel />
					)}
				</div>
				<div className={ 'nav' }>
					<Link to={ '/question/' + this.getPreviousParam() }>Previous</Link>
					{ this.question_id < this.props.questions.length ? (
						<Link to={ '/question/' + this.getNextParam() }>Next</Link>
					) : null }
				</div>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		questions: state.questions
	}
}

export default connect(mapStateToProps)(App);