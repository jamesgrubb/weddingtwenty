import React from 'react';
import Head from 'next/head';
import { cutOffDate, cutOffCountdown } from './api/utils/Meta';
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
import Venue from '../components/Venue';
export default function Home({ events, venue, welcome, gifts, cWord, live }) {
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
			<Section id='venue' title='Venue'>
				<ReactMarkdown className='px-0 font-mono italic text-teal-900 address'>
					{venue.address}
				</ReactMarkdown>
				<ReactMarkdown className='px-0 font-mono italic address'>
					{venue.url}
				</ReactMarkdown>
				<ReactMarkdown className='px-0 font-mono italic address'>
					{venue.email}
				</ReactMarkdown>
				<p className='px-0 font-mono italic text-teal-900 address'>
					{venue.phone}
				</p>
				<ReactMarkdown>{venue.copy}</ReactMarkdown>
			</Section>
			<Section id='day-and-night' title='Day and night'>
				<DayAndNight events={events} />
			</Section>
			<Section id='live' title='Live feed'>
				<ReactMarkdown>{live.copy}</ReactMarkdown>
				{live.email ? (
					<p className='font-mono italic font-bold text-teal-900'>
						Please email us by {cutOffDate()} (in{' '}
						{cutOffCountdown()} days) at{' '}
						<a href={`mailTo:${live.email}`}>{live.email}</a> and we
						will send you a private Zoom link.
					</p>
				) : (
					''
				)}
			</Section>
			<Section id='the-c-word' title='Covid'>
				<ReactMarkdown>{cWord}</ReactMarkdown>
			</Section>
			<Section id='gifts' title='Gifts'>
				<ReactMarkdown>{gifts.copy}</ReactMarkdown>
				<p className='px-0 font-mono italic text-teal-900 address'>
					The link to our wedding gift fund page is
				</p>
				<ReactMarkdown className='px-0 font-mono italic text-teal-900 address'>
					{gifts.url}
				</ReactMarkdown>
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
			Object.assign(obj, {
				[item.fields.Title]: {
					copy: item.fields.Copy,
					url: item.fields.Url != undefined ? item.fields.Url : '',
					email:
						item.fields.Email != undefined ? item.fields.Email : '',
					address:
						item.fields.Address != undefined
							? item.fields.Address
							: '',
					phone:
						item.fields.Phone != undefined ? item.fields.Phone : '',
				},
			}),
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
			venue: content.venue,
			live: content.liveFeed,
			cWord: content.cWord.copy,
			welcome: content.welcome.copy,
			events: events,
			food: foodItems,
			gifts: content.gifts,
			liveFeed: content.liveFeed.copy,
		},
	};
}
