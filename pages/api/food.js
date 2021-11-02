import { table, getMinifiedRecords } from '../api/utils/Airtable';
export default async function handler(req, res) {
	try {
		const records = await table('Menu')
			.select({ view: 'Grid view' })
			.firstPage();
		const minifiedRecords = getMinifiedRecords(records);
		res.statusCode = 200;
		console.log(minifiedRecords);
		await res.json(minifiedRecords);
	} catch (error) {
		console.error(error);
		res.json({ msg: 'cant get food, hungry' });
	}
}
