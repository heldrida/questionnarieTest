import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setActiveQuestion } from '../actions/index';
import { bindActionCreators } from 'redux';

class Question extends Component {
	componentWillMount() {
		this.setEventListeners();
	}

	setEventListeners() {
		this.props.router.listen(() => {
			let question_id = this.props.params.question_id;
			this.props.setActiveQuestion(question_id);
		});
	}

	render() {
		return (
			<div>
				Question container
			</div>
		);
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		setActiveQuestion: setActiveQuestion
	}, dispatch);
}

export default connect(null, matchDispatchToProps)(withRouter(Question));