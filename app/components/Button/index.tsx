import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.css';

type Props = {
	id: string;
	text?: string;
	icon?: string;
	iconOnly?: boolean;
	path?: string | undefined;
	onClick?:
		| ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
		| undefined;
};

export type ButtonProps = Props;

const defaultProps = {
	text: '',
	icon: '',
	iconOnly: false,
	path: undefined,
	onClick: undefined,
};

const Button = ({
	id,
	text,
	icon,
	iconOnly,
	path,
	onClick,
}: Props): JSX.Element => {
	const showText = text && text.length && !iconOnly;
	const button = path ? (
		<Link to={path} title={iconOnly ? text : undefined}>
			{icon && <i className={icon} />}
			{showText && <span>{text}</span>}
		</Link>
	) : (
		<button
			type="button"
			onClick={onClick}
			title={iconOnly ? text : undefined}
		>
			{icon && <i className={icon} />}
			{showText && <span>{text}</span>}
		</button>
	);

	return (
		<div className={`${styles.button} ${id}`} data-tid={id}>
			{button}
		</div>
	);
};
Button.defaultProps = defaultProps;

export default Button;
