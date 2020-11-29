import { AnyAction } from 'redux';

import newCommandReducer from '../../app/features/new-command/slice';

describe('reducers', () => {
	describe('counter', () => {
		it('should handle initial state', () => {
			expect(
				newCommandReducer(undefined, {} as AnyAction)
			).toMatchSnapshot();
		});

		it('should handle unknown action type', () => {
			expect(
				newCommandReducer({ fields: [] }, { type: 'unknown' })
			).toMatchSnapshot();
		});
	});
});
