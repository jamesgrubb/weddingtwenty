import { table, getMinifiedRecords } from './utils/Airtable';
export default async function handler(req, res) {
	switch (req.method) {
		case 'PUT':
			try {
				const guestData = json.parse(req.body);
				const records = await table('Guests').update(guestData);
				const updatedRecord = getMinifiedRecords(records);
				if (!updatedRecord.id) {
					throw new SyntaxError('guest ID not found');
				}
			} catch (error) {
				console.log(error);
				res.statusCode = 500;
				res.json({
					msg: 'something went wrong',
				});
			}
			break;
		default:
			try {
				const { Name, Surname } = await req.body;
				console.log(Name, Surname);
				const records = await table('Guests')
					.select({
						filterByFormula: `AND(({Name}='${Name}'),({Surname}='${Surname}'))`,
					})
					.firstPage();
				console.log(records);
				const minifiedRecords = getMinifiedRecords(records);
				if (res.statusCode === 200 || res.statusCode === 201) {
					res.json(minifiedRecords);
				} else {
					throw new SyntaxError(
						'name was not found in Guest database'
					);
				}
			} catch (error) {
				console.log(error);
				res.statusCode = 500;
				res.json({ msg: 'could not find guest' });
			}
	}
}
