import { table, minifyRecord } from './utils/Airtable';
export default async function handler(req, res) {
	if (req.method === 'PUT') {
		try {
			const { Name, Story } = req.body;
			const records = await table('LoveStories').create([
				{
					fields: {
						Name: Name,
						Story: Story,
					},
				},
			]);
			res.statusCode = 200;
			res.json(minifyRecord(records[0]));
		} catch (error) {
			console.error(error);
			res.statusCode = 500;
			res.json({ msg: 'Uh cant put new fields in' });
		}
	}
}
