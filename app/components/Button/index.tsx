import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';

type Props = {
	id: string;
	path: string;
	text?: string;
	icon?: string;
	iconOnly?: boolean;
};

const defaultProps = {
	text: '',
	icon: '',
	iconOnly: false,
};

const Button = ({ id, path, text, icon, iconOnly }: Props): JSX.Element => {
	const showText = text && text.length && !iconOnly;

	return (
		<div className={`${styles.button} ${id}`} data-tid={id}>
			<Link to={path} title={iconOnly ? text : undefined}>
				{icon && <i className={icon} />}
				{showText && <span>{text}</span>}
			</Link>
		</div>
	);
};
Button.defaultProps = defaultProps;

export default Button;

export type ButtonProps = Props;
