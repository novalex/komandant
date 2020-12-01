import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';

export type CommandArgument = {
	find: string;
	replace: string;
};

export type CommandItem = {
	id: string;
	name: string;
	content: string;
	arguments: CommandArgument[];
};

export type CommandData = {
	id: CommandItem['id'];
	timestamp: number;
	type: string;
	data?: number | string;
};

export type Command = {
	item: CommandItem;
	data?: CommandData[];
};

const slice = createSlice({
	name: 'commands',
	initialState: {
		items: [
			{
				id: 'lolplm',
				name: 'Simple echo and dir',
				content:
					'node E:\\Apps\\Development\\Komandant\\app\\features\\commands\\testCommand.js',
			},
		] as CommandItem[],
		data: [] as CommandData[],
	},
	reducers: {
		commandOutput: (state, action) => {
			state.data.push(action.payload as CommandData);
		},
		clearOutput: (state, action) => {
			state.data = state.data.filter(
				(data) => data.id !== action.payload.item.id
			);
		},
	},
});

export default slice.reducer;

export const { commandOutput, clearOutput } = slice.actions;

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
