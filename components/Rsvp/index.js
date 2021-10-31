import React from 'react';
import AcceptForm from '../Forms/AcceptForm';

export default function RSVP() {
	const getGuestDetails = (savedGuestDetails) => {
		console.log(`object`, savedGuestDetails);
	};

	return (
		<div>
			<AcceptForm onGetSavedGuestDetails={getGuestDetails} />
		</div>
	);
}
