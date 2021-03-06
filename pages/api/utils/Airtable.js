const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
);
const table = (tableName) => {
	return base(tableName);
};

const getMinifiedRecords = (records) => {
	return records.map((record) => minifyRecord(record));
};

const minifyRecord = (record) => {
	return {
		id: record.id,
		fields: record.fields,
	};
};

const strip = (string) => {
	let cleaned = string.toLowerCase();
	return cleaned.trim();
};

export { table, getMinifiedRecords, minifyRecord, strip };
