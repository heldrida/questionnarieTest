import React, { Component } from 'react';
import QuestionList from '../containers/question-list.js';
import StartPanel from './StartPanel.js';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import QuestionNav from '../containers/question-nav.js';

require('../../src/sass/app.scss');

class App extends Component {
	constructor(props) {
		super(props);
	}

	getPreviousParam() {
		let param;
		param = Math.max(0, parseInt(this.props.params.question_id) - 1);
		return param;
	}

	getNextParam() {
		let param;
		param = parseInt(this.props.params.question_id) + 1;
		return param;
	}

	getNavbarClassName() {
		return parseInt(this.props.params.question_id) > 0 ? 'active' : '';
	}

	render() {

		return (
			<div>
				<div>
					{ this.props.children ? (						
						React.cloneElement(this.props.children, { questions: this.props.questions, question_id: this.props.question_id })
					) : (
						<StartPanel />
					)}
				</div>
				<div className={ 'nav' + ' ' + this.getNavbarClassName() }>					
					{
						this.props.question_id > 1 && 
						<Link to={ '/question/' + this.getPreviousParam() }>Previous</Link>
					}
					<QuestionNav questions={ this.props.questions } />
					{
						this.props.question_id < this.props.questions.length &&
						<Link to={ '/question/' + this.getNextParam() } onClick={ () => { browserHistory.push('/question/' + this.props.params.question_id)	} }>Next</Link>
					}
				</div>
			</div>
		)
	}
}


function mapStateToProps(state, ownProps) {
	return {
		questions: state.questions,
		question_id: ownProps.params.question_id
	}
}

export default connect(mapStateToProps)(App);