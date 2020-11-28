import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes.json';

import styles from './style.css';

const Home = (): JSX.Element => {
	return (
		<div className={styles.container} data-tid="container">
			<Link to={routes.NEW_COMMAND}>Add new command</Link>
		</div>
	);
};

export default Home;