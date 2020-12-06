import { AnyAction } from 'redux';

import { CommandData, CommandItem } from '../../app/types';

import reducer, {
	initialState,
	addCommand,
	removeCommand,
	commandOutput,
	clearOutput,
} from '../../app/features/commands/slice';

const testCommand: CommandItem = {
	id: 'test-id',
	name: 'Test name',
	content: 'test content',
	arguments: [],
};

const testCommandData: CommandData = {
	id: 'test-id',
	type: 'stdout',
	timestamp: 100,
};

describe('reducer commands', () => {
	it('should handle initial state', () => {
		expect(reducer(undefined, {} as AnyAction)).toMatchSnapshot();
	});

	it('should handle unknown action type', () => {
		expect(reducer(initialState, { type: 'unknown' })).toMatchSnapshot();
	});

	it('should handle adding command', () => {
		expect(
			reducer(initialState, {
				type: addCommand,
				payload: testCommand,
			})
		).toMatchSnapshot();
	});

	it('should handle modifying existing command', () => {
		reducer(initialState, {
			type: addCommand,
			payload: testCommand,
		});

		const modifiedCommand = {
			...testCommand,
			name: 'Test name modified',
		};
		expect(
			reducer(initialState, {
				type: addCommand,
				payload: modifiedCommand,
			})
		).toMatchSnapshot();
	});

	it('should handle removing command', () => {
		const state = reducer(initialState, {
			type: addCommand,
			payload: testCommand,
		});

		expect(
			reducer(state, {
				type: removeCommand,
				payload: 'fake-test-id',
			})
		).toMatchSnapshot();

		expect(
			reducer(state, {
				type: removeCommand,
				payload: 'test-id',
			})
		).toMatchSnapshot();
	});

	it('should handle adding data', () => {
		expect(
			reducer(initialState, {
				type: commandOutput,
				payload: testCommandData,
			})
		).toMatchSnapshot();
	});

	it('should handle removing data', () => {
		const state = reducer(initialState, {
			type: commandOutput,
			payload: testCommandData,
		});

		expect(
			reducer(state, {
				type: clearOutput,
				payload: 'fake-test-id',
			})
		).toMatchSnapshot();

		expect(
			reducer(state, {
				type: clearOutput,
				payload: 'test-id',
			})
		).toMatchSnapshot();
	});
});
