import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

/* eslint-disable import/no-cycle */
import commands from './features/commands/slice';
import newCommand from './features/new-command/slice';

export default function createRootReducer(history: History) {
	return combineReducers({
		router: connectRouter(history),
		commands,
		newCommand,
	});
}
