import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import NewCommand from '../../../app/features/new-command';
import reducer, { initialState } from '../../../app/features/new-command/slice';

Enzyme.configure({ adapter: new Adapter() });

function setup(
	preloadedState: { newCommand: typeof initialState } = {
		newCommand: initialState,
	}
) {
	const store = configureStore({
		reducer: { newCommand: reducer },
		preloadedState,
	});

	const getWrapper = () =>
		mount(
			<Provider store={store}>
				<Router>
					<NewCommand />
				</Router>
			</Provider>
		);
	const component = getWrapper();
	return {
		store,
		component,
	};
}

describe('newCommand component', () => {
	it('should match exact snapshot', () => {
		const { store } = setup();
		const tree = renderer
			.create(
				<Provider store={store}>
					<Router>
						<NewCommand />
					</Router>
				</Provider>
			)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});
});
