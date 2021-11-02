import React from 'react';
import Head from 'next/head';
import { FiX } from 'react-icons/fi';
import Hero from '../components/Hero';
import Section from '../components/Section';

import DayAndNight from '../components/DayAndNight';
import Gifting from '../components/Gifting';
import CWord from '../components/CWord';

import { table, getMinifiedRecords } from '../pages/api/utils/Airtable';

import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import RSVP from '../components/Rsvp';
import Cta from '../components/Rsvp/CallToAction';
export default function Home({ events }) {
	const [showDialog, setShowDialog] = React.useState(false);
	console.log(showDialog);
	const open = () => setShowDialog(true);
	const close = () => setShowDialog(false);

	return (
		<>
			<Head>
				<title>James&amp;Tinas Wedding</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Cta handleClick={open} />

			<Hero />

			<Section id='welcome' title='Welcome'></Section>
			<Section id='the-c-word' title='Covid'>
				<CWord />
			</Section>
			<Section id='gifts' title='Gifts'>
				<Gifting />
			</Section>
			{showDialog && (
				<DialogOverlay onDismiss={close}>
					<DialogContent aria-labelledby='Modal'>
						<RSVP />

						<button
							className='absolute inline-flex text-4xl text-teal-600 bg-gray-800 hover:bg-gray-400 top-4 right-4'
							onClick={close}>
							<span className='hidden'>close</span>
							<FiX ariarole='hidden' />
						</button>
					</DialogContent>
				</DialogOverlay>
			)}

			<Section id='day-and-night' title='Day and night'>
				<DayAndNight events={events} />
			</Section>
		</>
	);
}

export async function getStaticProps() {
	const foodRecords = await table('Menu')
		.select({ view: 'Grid view' })
		.firstPage();
	const foodItems = getMinifiedRecords(foodRecords);
	const itemRecords = await table('Events')
		.select({ view: 'Grid view' })
		.firstPage();
	const events = getMinifiedRecords(itemRecords);

	return {
		props: {
			events: events,
			food: foodItems,
		},
	};
}
