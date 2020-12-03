import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';
import { Command, CommandData, CommandItem } from '../../types';

export const initialState = {
	items: [] as CommandItem[],
	data: [] as CommandData[],
};

const slice = createSlice({
	name: 'commands',
	initialState,
	reducers: {
		addCommand: (state, action) => {
			state.items.push(action.payload as CommandItem);
		},
		removeCommand: (state, action) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload
			);
		},
		commandOutput: (state, action) => {
			state.data.push(action.payload as CommandData);
		},
		clearOutput: (state, action) => {
			state.data = state.data.filter(
				(data) => data.id !== action.payload
			);
		},
	},
});

export default slice.reducer;

export const {
	addCommand,
	removeCommand,
	commandOutput,
	clearOutput,
} = slice.actions;

export const getCommandItems = (state: RootState) => state.commands.items;

export const getCommandData = (state: RootState) => state.commands.data;

export const getCommands = (state: RootState): Command[] => {
	const data = getCommandData(state);

	const commands = getCommandItems(state).map((item) => {
		return {
			item,
			data: data.filter((dataItem) => item.id === dataItem.id),
		} as Command;
	});

	return commands;
};
