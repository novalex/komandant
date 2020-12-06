/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import Button from '../../components/Button';

import { addCommand } from '../commands/slice';
import { getCommand, setId, setContent, setName, setValidation } from './slice';

import styles from './style.css';

export default function NewCommand() {
	const dispatch = useDispatch();
	const command = useSelector(getCommand);

	if (!command.item.id.length) {
		dispatch(setId(nanoid()));
	}

	const validateAndSave = () => {
		const validation = {
			valid: true,
			messages: [] as string[],
		};

		if (command.item.name.trim().length < 3) {
			validation.valid = false;
			validation.messages.push(
				'Name must be at least 3 characters long.'
			);
		}

		if (!command.item.content.trim().length) {
			validation.valid = false;
			validation.messages.push('Command content cannot be empty.');
		}

		dispatch(setValidation(validation));

		if (validation.valid) {
			dispatch(addCommand(command.item));
		}
	};

	return (
		<div className={styles.newCommandWrap} data-tid="new-command">
			{!command.isValid && command.validationMessages.length > 0 && (
				<div className="validation-errors">
					{command.validationMessages.map((message) => (
						<p key={message}>{message}</p>
					))}
				</div>
			)}
			<div className="field">
				<label htmlFor="command-name">Name</label>
				<input
					id="command-name"
					type="text"
					value={command.item.name}
					onChange={(e) => dispatch(setName(e.target.value))}
				/>
			</div>
			<div className="field">
				<label htmlFor="command-content">Command</label>
				<textarea
					id="command-content"
					value={command.item.content}
					onChange={(e) => dispatch(setContent(e.target.value))}
				/>
			</div>
			<div className="field">
				<Button
					id="save-command"
					text="Save"
					onClick={validateAndSave}
				/>
			</div>
		</div>
	);
}
