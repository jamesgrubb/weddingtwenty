import AcceptForm from '../Forms/AcceptForm';

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import DayAndNight from '../DayAndNight';
import Night from './Night';

export default function RSVP() {
	const [guestData, setGuestData] = useState([]);
	const [accepted, setAccepted] = useState([]);
	const [declined, setDeclined] = useState([]);

	const getGuestDetails = async (savedGuestDetails) => {
		console.log(`initial state "guestData"`, guestData);
		console.log(`Raw data from`, savedGuestDetails);
		setGuestData(savedGuestDetails);
		const { Accept } = savedGuestDetails;

		/**
		 * Switch Statement to save accepted and not accepted
		 */
		switch (Accept) {
			case 'Accept':
				setAccepted(savedGuestDetails);
				break;
			case 'Decline':
				setDeclined(savedGuestDetails);
				break;
			default:
				setGuestData(savedGuestDetails);
		}

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
			setGuestData((previousState) => {
				if (guest.length > 0) {
					return {
						...previousState,
						id: guest[0].id,
						Invitation: guest[0].fields.Invitation,
					};
				}
			});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		async function fetchData() {}
		/**
		 * Console effects of switch statement
		 */
		console.log('from useEffect guestData', guestData);
		console.log('from useEffect accepted', accepted);
		console.log('from useEffect declined', declined);
	}, [guestData]);

	return (
		<div>
			<AcceptForm onGetSavedGuestDetails={getGuestDetails} />

			{guestData.Accept === 'Accept' && <Night name={guestData.Name} />}

			{guestData.Accept === 'Accept' &&
				guestData.Invitation === 'DayAndNight' && <DayAndNight />}
		</div>
	);
}
