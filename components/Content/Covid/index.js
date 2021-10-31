import React from 'react';
import useSwr from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

const Component = (props) => {
	const baseUrl = `https://api.airtable.com/v0/appt24D60BFrBtmx4/Content?api_key=${process.env.AIRTABLE_API_KEY}`;
	const { data, error } = useSwr(baseUrl, fetcher);
	if (error)
		return <div className='error'>There was an error fetching data</div>;
	if (!data) return <div className=''>Loading</div>;
	console.log(data);
	return <div>Fetcher</div>;
};

export default Component;
