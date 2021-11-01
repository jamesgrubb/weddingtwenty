import AcceptForm from '../Forms/AcceptForm';

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';

export default function RSVP() {
	const [guestData, setGuestData] = useState([]);

	const getGuestDetails = async (savedGuestDetails) => {
		setGuestData(savedGuestDetails);
		console.log(`object`, savedGuestDetails);

		const results = await fetch('/api/guest', {
			method: 'POST',
			body: JSON.stringify(savedGuestDetails),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.catch((err) => {
				console.error(err);
			})
			.then((res) => res.json());
		console.log(`results`, results);

		if (results.length === 0) {
			toast.warning(
				`Sorry could not find, ${savedGuestDetails.Name} ${savedGuestDetails.Surname} on the list, please try again`
			);
		}
		if (results.length > 0) {
			toast.success(
				`${savedGuestDetails.Name} ${savedGuestDetails.Surname} you are on the list`
			);
		}
		setGuestData(results);
		console.log(`guestData`, guestData);
	};

	return (
		<div>
			<AcceptForm onGetSavedGuestDetails={getGuestDetails} />
		</div>
	);
}
