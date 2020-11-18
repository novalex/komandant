/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';

// Lazily load routes and code split with webpack
const LazyNewCommandPage = React.lazy(() =>
	import(
		/* webpackChunkName: "NewCommandPage" */
		'./containers/NewCommandPage'
	)
);

const NewCommandPage = (props: Record<string, unknown>) => (
	<React.Suspense fallback={<h1>Loading...</h1>}>
		<LazyNewCommandPage {...props} />
	</React.Suspense>
);

const NoMatch = () => <>Page does not exist</>;

export default function Routes() {
	return (
		<App>
			<Switch>
				<Route exact path={routes.HOME} component={HomePage} />
				<Route path={routes.NEW_COMMAND} component={NewCommandPage} />
				<Route component={NoMatch} />
			</Switch>
		</App>
	);
}
