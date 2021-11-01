import AcceptForm from '../Forms/AcceptForm';

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import DayAndNight from '../DayAndNight';
import Night from './Night';

export default function RSVP() {
	const [guestData, setGuestData] = useState([]);
	const [accepted, setAccepted] = useState([])
	const [declined, setDeclined] = useState([])

	const getGuestDetails = async (savedGuestDetails) => {
		console.log(`initial state "guestData"`, guestData);
		console.log(`Raw data from`, savedGuestDetails);
		setGuestData(savedGuestDetails);
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
			await setGuestData((previousState) => {
				if (guest.length > 0) {
					return { ...previousState, id: guest[0].id };
				}
			});
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
		
			{guestData.length > 0 ? }
			{guestData.Accept === 'Accept' && <Night name={guestData.Name} />}

			{guestData.Accept === 'Accept' &&
				guestData.Invitation === 'DayAndNight' && <DayAndNight />}
		</div>
	);
}
