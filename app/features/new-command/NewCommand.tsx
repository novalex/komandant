import React from 'react';
import { useSelector } from 'react-redux';
import styles from './style.css';
import { selectFields } from './newCommandSlice';

export default function NewCommand() {
	const value = useSelector(selectFields);
	return (
		<div
			className={`newCommandWrap ${styles.newCommand}`}
			data-tid="new-command"
		>
			{value}
		</div>
	);
}
