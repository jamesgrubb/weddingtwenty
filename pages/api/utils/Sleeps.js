const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

const sleeps = () => {
	dayjs.extend(relativeTime);

	let now = dayjs();

	console.log(now.format('YYYY-MM-DD'));

	const date1 = dayjs('2021-12-28');
	const date2 = now.format('YYYY-MM-DD');

	let df4 = date1.diff(date2, 'day');
	return df4;
};

export { sleeps };
