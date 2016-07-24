import React from 'react';
import { Link } from 'react-router';

const StartPanel = () => {
	return (
		<div>
			StartPanel loaded!
			<Link to={ '/question/1' }>Start here</Link>
		</div>
	)
}

export default StartPanel;