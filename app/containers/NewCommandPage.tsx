import React from 'react';

import Header from '../components/Header';
import NewCommand from '../features/new-command/NewCommand';

export default function NewCommandPage() {
	return (
		<>
			<Header title="New Command" />

			<NewCommand />
		</>
	);
}
