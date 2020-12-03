import React from 'react';

import styles from './style.scss';

type Props = {
	center?: boolean;
	children: JSX.Element | JSX.Element[];
};

const Content = ({ center, children }: Props): JSX.Element => {
	let className = styles.contentWrap;
	if (center) {
		className += ` ${styles.center}`;
	}

	return <div className={className}>{children}</div>;
};
Content.defaultProps = {
	center: false,
};

export default Content;
