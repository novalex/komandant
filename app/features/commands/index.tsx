import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import routes from '../../constants/routes.json';
import { Command } from '../../types';

import Executor from './Executor';

import { getCommands, commandOutput, clearOutput } from './slice';

import styles from './style.scss';

export default function Commands() {
	const dispatch = useDispatch();
	const commands = useSelector(getCommands);

	const executeCommand = (command: Command): void => {
		const output = () => ({
			id: command.item.id,
			timestamp: new Date().getTime(),
		});

		Executor({
			command: command.item.content,
			onOutput: (data) =>
				dispatch(commandOutput({ ...output(), type: 'stdout', data })),
			onError: (data) =>
				dispatch(commandOutput({ ...output(), type: 'stderr', data })),
			onExit: (data) =>
				dispatch(commandOutput({ ...output(), type: 'exit', data })),
		});
	};

	const clearData = (command: Command): void => {
		dispatch(clearOutput(command.item.id));
	};

	const commandList = commands.length ? (
		<div className={styles.commandList}>
			{commands.map((command) => (
				<div className={styles.commandItem} key={command.item.id}>
					<div className="command">
						<small>{command.item.name}</small>
						<pre>{command.item.content}</pre>

						<div className="actions">
							<Button
								id="runButton"
								text="Run command"
								icon="fa fa-terminal"
								iconOnly
								onClick={() => executeCommand(command)}
							/>
							<Button
								id="clearButton"
								text="Clear output"
								icon="fa fa-window-close"
								iconOnly
								onClick={() => clearData(command)}
							/>
						</div>
					</div>

					{command.data && (
						<div className={styles.commandOutput}>
							{command.data?.map((dataEntry) => {
								const text =
									(dataEntry.type === 'exit'
										? 'Exit code: '
										: '') + dataEntry.data;

								return (
									<div
										key={dataEntry.timestamp}
										className={dataEntry.type}
									>
										<pre>{text}</pre>
										<small>{dataEntry.timestamp}</small>
									</div>
								);
							})}
						</div>
					)}
				</div>
			))}
		</div>
	) : (
		<div className={styles.commandsEmpty}>
			<p>No commands yet!</p>

			<Link to={routes.NEW_COMMAND}>Add new command</Link>
		</div>
	);

	return (
		<div className={styles.commandsWrap} data-tid="commands">
			{commandList}
		</div>
	);
}
