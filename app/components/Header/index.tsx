import React from 'react';

import Button, { ButtonProps } from '../Button';

import styles from './style.css';

import routes from '../../constants/routes.json';

type Props = {
	title: string;
	backButton?: boolean;
	actions?: ButtonProps[];
};

const defaultProps = {
	backButton: true,
	actions: [],
};

const Header = ({
	title,
	backButton,
	actions = defaultProps.actions,
}: Props): JSX.Element => {
	const leftContent = backButton ? (
		<Button id="backButton" path={routes.HOME} icon="fa fa-chevron-left" />
	) : null;

	const rightContent = actions.length ? (
		<nav>
			{actions.map((props: ButtonProps) => (
				<Button key={props.id} {...props} />
			))}
		</nav>
	) : null;

	return (
		<header className={styles.header}>
			{leftContent}

			<h1>{title}</h1>

			{rightContent}
		</header>
	);
};
Header.defaultProps = defaultProps;

export default Header;
