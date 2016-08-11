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
	// render() {
	// 	return (
	// 		<ul>
	// 		{ this.generate() }
	// 		</ul>
	// 	);
	// }
	render() {
		return (
			<ul>
			</ul>
		);
	}
}

export default QuestionNav;