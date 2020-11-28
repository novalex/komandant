import React from 'react';

import Header from '../components/Header';
import Home from '../components/Home';

import routes from '../constants/routes.json';

export default function HomePage() {
	return (
		<>
			<Header
				title="Commands"
				backButton={false}
				actions={[
					{
						id: 'new-command',
						path: routes.NEW_COMMAND,
						text: 'New command',
						icon: 'fa fa-plus',
						iconOnly: true,
					},
				]}
			/>

			<Home />
		</>
	);
}
