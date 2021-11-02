import { get } from 'react-hook-form';
import { table, getMinifiedRecords } from '../api/utils/Airtable';
export default async function handler(req, res) {
	try {
		const dietRecords = await table('Intolerances').select({}).firstPage();
		const minifiedDietRecords = getMinifiedRecords(dietRecords);
		const records = await table('Menu')
			.select({ view: 'Grid view' })
			.firstPage();
		const minifiedRecords = getMinifiedRecords(records);
		res.statusCode = 200;

		await res.json([...minifiedRecords, ...minifiedDietRecords]);
	} catch (error) {
		console.error(error);
		res.json({ msg: 'cant get food, hungry' });
	}
}
