const interval = setInterval(() => {
	// eslint-disable-next-line no-console
	console.log('module data');
	// eslint-disable-next-line no-underscore-dangle
	if (interval._idleStart > 5000) clearInterval(interval);
}, 1000);
