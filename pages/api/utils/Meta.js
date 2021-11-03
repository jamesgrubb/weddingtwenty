const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

let now = dayjs();

const cutOffDate = () => {
	const cutOff = dayjs('2021-11-13').format('MMMM-DD');
	return cutOff;
};

const cutOffCountdown = () => {
	dayjs.extend(relativeTime);

	console.log(now.format('YYYY-MM-DD'));

	const date1 = dayjs('2021-11-13');
	const date2 = now.format('YYYY-MM-DD');

	let df4 = date1.diff(date2, 'day');
	return df4;
};

export { cutOffCountdown, cutOffDate };
