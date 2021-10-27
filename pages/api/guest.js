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
				const { name, surname } = req.body;
				console.log(name, surname);
				const records = await table('Guests')
					.select({
						filterByFormula: `AND(({Name}='${name}'),({Surname}='${surname}'))`,
					})
					.firstPage();
				const minifiedRecords = getMinifiedRecords(records);
				if (!minifiedRecords[0].fields.Name) {
					throw new SyntaxError(
						'name was not found in Guest database'
					);
				}
				res.json(minifiedRecords);
			} catch (error) {
				console.log(error);
				res.statusCode = 500;
				res.json({ msg: 'could not find guest' });
			}
	}
}
