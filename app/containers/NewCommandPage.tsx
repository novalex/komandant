import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import NewCommand from '../features/new-command/NewCommand';

export default function NewCommandPage() {
	return (
		<>
			<div className="backButton" data-tid="backButton">
				<Link to={routes.HOME}>
					<i className="fa fa-chevron-left fa-2x" />
				</Link>
			</div>

			<h2>Add new command</h2>
			<NewCommand />
		</>
	);
}
