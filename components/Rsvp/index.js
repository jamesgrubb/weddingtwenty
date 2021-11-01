import AcceptForm from '../Forms/AcceptForm';

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import DayAndNight from '../DayAndNight';
import Night from './Night';

export default function RSVP() {
	const [guestData, setGuestData] = useState([]);
	const [accepted, setAccepted] = useState(null);
	const [declined, setDeclined] = useState(null);

	const getGuestDetails = async (savedGuestDetails) => {
		console.log(
			`initial state "guestData"`,
			guestData,
			`Raw form data`,
			savedGuestDetails
		);

		setGuestData(savedGuestDetails);
		const { Accept } = savedGuestDetails;
		console.log(Accept);

		/**
		 * Switch Statement to save accepted and not accepted
		 */
		switch (Accept) {
			case 'Accept':
				setDeclined(null);
				setAccepted(savedGuestDetails);
				break;
			case 'Decline':
				setAccepted(null);
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
			if (guest.length > 0 && Accept === 'Accept') {
				console.log(`Accpeted guest`, guest);
				setAccepted((previousState) => {
					return {
						...previousState,
						id: guest[0].id,
						Invitation: guest[0].fields.Invitation,
					};
				});
			} else if (guest.length > 0 && Accept === 'Decline') {
				console.log(`Declined guest`, guest);
				setDeclined((previousState) => {
					return {
						...previousState,
						id: guest[0].id,
						Invitation: guest[0].fields.Invitation,
					};
				});
			}
			// setAccepted((previousState) => {
			// 	if (guest.length > 0 && guest[0].fields.Accept === 'Accept') {
			// 		return {
			// 			...previousState,
			// 			id: guest[0].id,
			// 			Invitation: guest[0].fields.Invitation,
			// 		};
			// 	}
			// });

			// setGuestData((previousState) => {
			// 	if (guest.length > 0) {
			// 		return {
			// 			...previousState,
			// 			id: guest[0].id,
			// 			Invitation: guest[0].fields.Invitation,
			// 		};
			// 	}
			// });
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		async function updateGuest() {}
		/**
		 * Console effects of switch statement
		 */
		// console.log('from useEffect guestData', guestData);
		console.log('from useEffect accepted', accepted);
		console.log('from useEffect declined', declined);
	}, [guestData, accepted, declined]);

	return (
		<>
			<div>
				<AcceptForm onGetSavedGuestDetails={getGuestDetails} />
			</div>
			<div className=''>
				{accepted != null && accepted.Invitation === 'DayAndNight' && (
					<p>Accepted Day</p>
				)}
				{declined != null && <p>Declined</p>}
				{accepted != null && accepted.Invitation === 'Night' && (
					<p>Accepted Night</p>
				)}
			</div>
		</>
	);
}
