import React from 'react';
import { useSelector } from 'react-redux';

import { selectFields } from './slice';

import styles from './style.css';

export default function NewCommand() {
	const value = useSelector(selectFields);

	return (
		<div className={styles.newCommandWrap} data-tid="new-command">
			{value}
		</div>
	);
}
