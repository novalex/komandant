import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Commands from '../../../app/features/commands';
import reducer, { initialState } from '../../../app/features/commands/slice';

Enzyme.configure({ adapter: new Adapter() });

function setup(
	preloadedState: { commands: typeof initialState } = {
		commands: initialState,
	}
) {
	const store = configureStore({
		reducer: { commands: reducer },
		preloadedState,
	});

	const getWrapper = () =>
		mount(
			<Provider store={store}>
				<Router>
					<Commands />
				</Router>
			</Provider>
		);
	const component = getWrapper();
	return {
		store,
		component,
	};
}

describe('component commands', () => {
	it('should match exact snapshot', () => {
		const { store } = setup();
		const tree = renderer
			.create(
				<Provider store={store}>
					<Router>
						<Commands />
					</Router>
				</Provider>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
