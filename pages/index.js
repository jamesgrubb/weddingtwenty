import React from 'react';
import Head from 'next/head';

import Hero from '../components/Hero';
import Section from '../components/Section';
import CTA from '../components/Rsvp/Cta';
import DayAndNight from '../components/DayAndNight';
import Gifting from '../components/Gifting';
import CWord from '../components/CWord';

import { table, getMinifiedRecords } from '../pages/api/utils/Airtable';

import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import RSVP from '../components/Rsvp';

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

			<CTA handleClick={open} />
			<Hero />

			<Section id='welcome' title='Welcome'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Magnam modi cupiditate quas accusamus, incidunt corporis
					voluptates id tempore ut nobis.
				</p>
			</Section>
			<Section id='the-c-word' title='Covid'>
				<CWord />
			</Section>
			<Section id='gifts' title='Gifts'>
				<Gifting />
			</Section>

			<DialogOverlay isOpen={showDialog} onDismiss={close}>
				<DialogContent aria-labelledby='Modal'>
					<RSVP />

					<button onClick={close}>Got it.</button>
				</DialogContent>
			</DialogOverlay>
			<Section id='day-and-night' title='Day and night'>
				<DayAndNight events={events} />
			</Section>
		</>
	);
}

export async function getStaticProps() {
	const itemRecords = await table('Events')
		.select({ view: 'Grid view' })
		.firstPage();
	const events = getMinifiedRecords(itemRecords);

	return {
		props: {
			events: events,
		},
	};
}
