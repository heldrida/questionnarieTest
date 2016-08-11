import React, { Component } from 'react';
import { Link } from 'react-router';

class QuestionNav extends Component {

	constructor(props) {
		super(props);
	}

	generate() {
		return this.props.questions.map((question) => {
			return (
				<li key={ question.id }>
					<Link  to={ '/question/' + question.id }>
					{ question.id }
					</Link>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
			{
				Object.keys(this.props.questions).length > 0 &&
				<ul>
				{ this.generate() }
				</ul>
			}
			</div>
		);
	}

}

export default QuestionNav;