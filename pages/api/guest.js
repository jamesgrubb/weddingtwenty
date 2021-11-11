import { table, getMinifiedRecords, strip } from './utils/Airtable';

function toTitleCase(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(' ');
}

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { Name: name, Surname: surname } = await JSON.parse(req.body);
		console.log(`name`, name);
		console.log(`surname`, surname);
		console.log(`req.body`, await req.body);
		const records = await table('Guests')
			.select({
				filterByFormula: `
					AND(({name}='${strip(name)}'),({surname}='${strip(surname)}'))						
						`,
			})
			.firstPage((err, records) => {
				if (err) {
					console.error(err);
				}
				const minifiedRecords = getMinifiedRecords(records);
				console.log('api response', minifiedRecords);
				res.statusCode = 200;
				res.json(minifiedRecords);
			});
	}
	if (req.method === 'PUT') {
		try {
			const { id, fields } = req.body;
			console.log('from the PUT request ', req.body);
			const updatedRecord = await table('Guests').update(
				[{ id, fields }],
				{ typecast: true }
			);
			const minifiedRecord = getMinifiedRecords(updatedRecord);
			res.json(minifiedRecord);
			res.statusCode = 200;
		} catch (error) {
			console.error(error);
			res.json({
				msg: 'Something went wrong updating the Airtable to accept or decline',
			});
		}
	}
}
