import AcceptForm from '../Forms/AcceptForm';

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';

export default function RSVP() {
	const [guestData, setGuestData] = useState([]);

	const getGuestDetails = async (savedGuestDetails) => {
		console.log(`initial state "guestData"`, guestData);
		console.log(`Raw data from`, savedGuestDetails);
		try {
			const result = await fetch('/api/guest', {
				method: 'POST',
				body: JSON.stringify(savedGuestDetails),
				headers: {
					'Application-Type': 'application/json',
				},
			});
			const guest = await result.json();
			console.log(`response from api`, guest);
			setGuestData(guest);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		async function fetchData() {}
		console.log('from useEffect', guestData);
	}, [guestData]);

	return (
		<div>
			<AcceptForm onGetSavedGuestDetails={getGuestDetails} />
		</div>
	);
}
