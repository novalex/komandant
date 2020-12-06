import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';

export const initialState = {
	item: {
		id: '',
		name: '',
		content: '',
		arguments: [],
	},
	isValid: false,
	validationMessages: [],
};

const slice = createSlice({
	name: 'newCommand',
	initialState,
	reducers: {
		setId: (state, action) => {
			state.item.id = action.payload;
		},
		setName: (state, action) => {
			state.item.name = action.payload;
		},
		setContent: (state, action) => {
			state.item.content = action.payload;
		},
		setValidation: (state, action) => {
			state.isValid = action.payload.valid;
			state.validationMessages = action.payload.messages;
		},
	},
});

export default slice.reducer;

export const { setId, setName, setContent, setValidation } = slice.actions;

export const getCommand = (state: RootState) => state.newCommand;
