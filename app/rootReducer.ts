import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import newCommandReducer from './features/new-command/newCommandSlice';

export default function createRootReducer(history: History) {
	return combineReducers({
		router: connectRouter(history),
		newCommand: newCommandReducer,
	});
}
