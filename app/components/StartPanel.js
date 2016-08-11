import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchData, setData } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class StartPanel extends Component {
	
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchData()
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

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: () => {
			let p = fetchData();
			p.payload.then((response) => {
				dispatch(setData(response))
			});
		}
	}
}

export default connect(false, mapDispatchToProps)(StartPanel);