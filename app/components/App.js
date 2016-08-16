import React, { Component } from 'react';
import QuestionList from '../containers/question-list.js';
import StartPanel from './StartPanel.js';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import QuestionNav from '../containers/question-nav.js';
import { fetchData, setData, setQuestionId } from '../actions/index';
import { withRouter } from 'react-router';

require('../../src/sass/app.scss');

class App extends Component {
	constructor(props) {
		super(props);
		console.log('app props', props);
	}

	componentWillMount() {
		this.props.fetchData();
		this.setEventListeners();
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

	setEventListeners() {

		this.props.router.listen(() => {
			if (typeof this.props.params.question_id !== 'undefined') {
				console.log('this.props.params.question_id', this.props.params.question_id);
				//setQuestionId(this.props.params.question_id);
			}
		});
	}

	render() {

		return (
			<div>
				<div>
					{ this.props.children }

					{ Object.keys(this.props.questions).length > 0 &&
						<StartPanel />
					}
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
		question_id: state.question_id
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: () => {
			let p = fetchData();
			p.payload.then((response) => {
				dispatch(setData(response))
			});
		},
		setQuestionId: setQuestionId
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));