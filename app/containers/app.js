import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/index';

require('../../src/sass/app.scss');

class App extends Component {
	componentWillMount() {
		this.props.fetchQuestions();
	}

	componentWillReceiveProps() {

	}

	render() {
		console.log('this.props.questions.loading', this.props.questions.loading);
		console.log('this.props.questions.list', this.props.questions.list);

		return (
			<div>
				<h1>App.js</h1>
			</div>
		);
	}
}


function mapStateToProps(state, ownProps) {
	return {
		questions: state.questions
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchQuestions: fetchQuestions
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);