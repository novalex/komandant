import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.css';
import { selectFields } from './newCommandSlice';

export default function NewCommand() {
	const dispatch = useDispatch();
	const value = useSelector(selectFields);
	return (
		<div>
			<div className={`counter ${styles.counter}`} data-tid="counter">
				{value}
			</div>
		</div>
	);
}
