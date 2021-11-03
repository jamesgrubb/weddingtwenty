import React from 'react';
import Head from 'next/head';
import { FiX } from 'react-icons/fi';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ReactMarkdown from 'react-markdown';
import DayAndNight from '../components/DayAndNight';
import Gifting from '../components/Gifting';
import CWord from '../components/CWord';

import { table, getMinifiedRecords } from '../pages/api/utils/Airtable';

import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import RSVP from '../components/Rsvp';
import Cta from '../components/Rsvp/CallToAction';
export default function Home({ events, welcome, gifts, cWord, live }) {
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

			<Section id='welcome' title='Welcome'>
				<ReactMarkdown>{welcome}</ReactMarkdown>
			</Section>
			<Section id='day-and-night' title='Day and night'>
				<DayAndNight events={events} />
			</Section>
			<Section id='day-and-night' title='Live feed'>
				<ReactMarkdown>{live}</ReactMarkdown>
			</Section>
			<Section id='the-c-word' title='Covid'>
				<ReactMarkdown>{cWord}</ReactMarkdown>
			</Section>
			<Section id='gifts' title='Gifts'>
				<ReactMarkdown>{gifts}</ReactMarkdown>
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
		</>
	);
}

export async function getStaticProps() {
	const allContentRecords = await table('Content').select({}).firstPage();
	const minifiedContent = getMinifiedRecords(allContentRecords);
	const content = minifiedContent.reduce(
		(obj, item) =>
			Object.assign(obj, { [item.fields.Title]: item.fields.Copy }),
		{}
	);
	console.log(`content`, content);
	const giftRecords = await table('Content')
		.select({ filterByFormula: `{Title}="Gifts"` })
		.firstPage();
	const gifts = getMinifiedRecords(giftRecords);
	// const {Welcome,Venue,Gifts,LiveFeed}

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
			gifts: content.gifts,
			live: content.liveFeed,
			cWord: content.cWord,
			welcome: content.welcome,
			events: events,
			food: foodItems,
			gifts: content.gifts,
			liveFeed: content.liveFeed,
		},
	};
}
