import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/index';
import Questions from '../containers/questions';

require('../../src/sass/app.scss');

class App extends Component {
	componentWillMount() {
		this.props.fetchQuestions();
	}

	componentWillReceiveProps() {

	}

	render() {
		{ console.log(this.props.questions) }
		return (
			<div>
				<h1>Questions app title</h1>
				{ !this.props.questions.loading && <Questions /> }
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