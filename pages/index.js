import Head from 'next/head';
import { FindGuest } from '../components/Forms/FindGuest/FindGuest';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Rsvp from '../components/RSVP';
import DayAndNight from '../components/DayAndNight';
import Gifting from '../components/Gifting';
import CWord from '../components/CWord';
import { table, getMinifiedRecords } from '../pages/api/utils/Airtable';
import Covid from '../components/Content/Covid';

export default function Home({ events }) {
	console.log(events);
	const handleRsvp = (handleReceivedRsvpData) => {};
	return (
		<>
			<Head>
				<title>James&amp;Tinas Wedding</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Rsvp onHandleRsvp={handleRsvp} />
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
				{/* <Covid /> */}
				<Gifting />
			</Section>
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
	console.log(events);
	console.log(events);
	return {
		props: {
			events: events,
		},
	};
}
