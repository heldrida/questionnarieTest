import React, { Component } from 'react';
import { connect } from 'react-redux';

class Questions extends Component {
	render() {
		return (
			<div>
				<ul>
				{
					this.props.questions.map((data) => {
						return <li key={ data.id }>{ data.question }</li>
					})
				}
				</ul>
			</div>
		);
	}
}


function mapStateToProps(state, ownProps) {
	return {
		questions: state.questions.list
	}
}

export default connect(mapStateToProps)(Questions);