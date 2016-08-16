import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class StartPanel extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				StartPanel loaded!
				<Link to={ '/question/1' }>Start here</Link>
			</div>
		)
	}

}

export default StartPanel;