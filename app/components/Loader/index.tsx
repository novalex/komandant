import React from 'react';

import styles from './style.css';

type Props = {
	size?: number;
	color?: string;
	speed?: number;
	message?: string;
};

const defaultProps = {
	size: 38,
	color: '#fff',
	speed: 0.9,
	message: null,
};

const Loader = ({
	size = defaultProps.size,
	color,
	speed,
	message,
}: Props): JSX.Element => {
	const stroke = 3;
	const sizeMinusStroke = size - stroke;
	const halfSize = sizeMinusStroke / 2;
	const quarterSize = size / 4;
	const quarterSizeMinusStroke = sizeMinusStroke / 4;

	const animateTransform = (
		<animateTransform
			attributeName="transform"
			type="rotate"
			from={`0 ${halfSize} ${halfSize}`}
			to={`360 ${halfSize} ${halfSize}`}
			dur={`${speed}s`}
			repeatCount="indefinite"
		/>
	);

	return (
		// SVG by Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL
		<div className={styles.loader}>
			<svg
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient
						x1="0%"
						y1="0%"
						x2="60%"
						y2="23.865%"
						id="gradient"
					>
						<stop stopColor={color} stopOpacity="0" offset="0%" />
						<stop stopColor={color} stopOpacity=".6" offset="60%" />
						<stop stopColor={color} offset="100%" />
					</linearGradient>
				</defs>
				<g fill="none" fillRule="evenodd">
					<g transform="translate(1 1)">
						<path
							d={`M${sizeMinusStroke} ${halfSize}c0-${quarterSize}-${quarterSizeMinusStroke}-${halfSize}-${halfSize}-${halfSize}`}
							stroke="url(#gradient)"
							strokeWidth={stroke}
						>
							{animateTransform}
						</path>
						<circle
							fill={color}
							cx={sizeMinusStroke}
							cy={halfSize}
							r="1"
						>
							{animateTransform}
						</circle>
					</g>
				</g>
			</svg>

			{message && (
				<strong className={styles.loaderMessage}>{message}</strong>
			)}
		</div>
	);
};
Loader.defaultProps = defaultProps;

export default Loader;

const WrappedLoader = (props?: Props): JSX.Element => (
	<div className={styles.wrappedLoader}>
		<Loader {...props} />
	</div>
);
WrappedLoader.defaultProps = defaultProps;

export { WrappedLoader };
