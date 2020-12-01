import React from 'react';

import styles from './style.scss';

type Props = {
	children: JSX.Element | JSX.Element[];
};

const Content = ({ children }: Props): JSX.Element => {
	return <div className={styles.contentWrap}>{children}</div>;
};

export default Content;
