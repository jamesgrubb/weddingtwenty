import AcceptForm from '../Forms/AcceptForm';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import useSWR from 'swr';
import { toast } from 'react-toastify';
import Night from './Night';
import Day from './Day';
import Declined from './Declined';
import ThankYou from './ThankyouForYourMenuChoice';
export default function RSVP(props) {
	const [isShowing, setIsShowing] = useState(true);
	const [menuIsShowing, setMenuIsSHowing] = useState(true);
	const [guestData, setGuestData] = useState([]);
	const [accepted, setAccepted] = useState(null);
	const [declined, setDeclined] = useState(null);

	const [updatedGuest, setUpdatedGuest] = useState(null);
	console.log(`props`, props);

	const formRef = useRef();

	useEffect(() => {
		const form = formRef.current;
		const tl = gsap.timeline();
		!isShowing && tl.to(form, { y: -100, opacity: 0, display: 'none' });
	}, [isShowing]);

	const getGuestDetails = async (savedGuestDetails) => {
		console.log(
			`initial state "guestData"`,
			guestData,
			`Raw form data`,
			savedGuestDetails
		);
		setIsShowing(false);
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

	async function hanldeMenuChoice(savedFoodChoice) {
		console.log(`guestData from sendFoodChoice functions`, guestData.id);
		console.log(`foodChoice`, savedFoodChoice);
		try {
			const updatedFoodChoice = await fetch('/api/guest', {
				method: 'PUT',
				body: JSON.stringify({
					id: accepted.id,
					fields: savedFoodChoice,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			setMenuIsSHowing(false);
			console.log(`returnedFoodChoice`, await updatedFoodChoice.json());
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		async function updateGuest() {
			try {
				const accept = await fetch('/api/guest', {
					method: 'PUT',
					body: JSON.stringify({
						id: guestData.id,
						fields: {
							Attending: guestData.Accept,
						},
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				});

				console.log(await accept.json());
			} catch (error) {
				console.error(error);
			}
		}

		if (!guestData || !guestData.id || guestData.id === '') {
			return;
		}
		updateGuest();

		/**
		 * Console effects of switch statement
		 */
		console.log('from useEffect guestData', guestData);
		console.log('from useEffect accepted', accepted);
		console.log('from useEffect declined', declined);
	}, [guestData, accepted, declined]);

	return (
		<>
			<div ref={formRef}>
				<AcceptForm onGetSavedGuestDetails={getGuestDetails} />
			</div>
			<div className=''>
				{accepted != null && accepted.Invitation === 'DayAndNight' && (
					<>
						{menuIsShowing && (
							<Day
								guest={accepted.Name}
								onGetMenuChoice={hanldeMenuChoice}
							/>
						)}
					</>
				)}
				{accepted != null && accepted.Invitation === 'Night' && (
					<>
						<Night guest={accepted.Name} />
					</>
				)}
				{declined != null && <Declined guest={declined.Name} />}
				{!menuIsShowing && <ThankYou />}
			</div>
		</>
	);
}
