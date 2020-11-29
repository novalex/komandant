import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store';

const slice = createSlice({
	name: 'newCommand',
	initialState: { fields: [] },
	reducers: {},
});

export default slice.reducer;

export const selectFields = (state: RootState) => state.newCommand.fields;
