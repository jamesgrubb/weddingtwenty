import Head from 'next/head';
import { FindGuest } from '../components/Forms/FindGuest/FindGuest';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Rsvp from '../components/Rsvp';
import DayAndNight from '../components/DayAndNight';
import Gifting from '../components/Gifting';
import { table, getMinifiedRecords } from '../pages/api/utils/Airtable';
export default function Home({ events }) {
	console.log(events);
	return (
		<>
			<Head>
				<title>James&amp;Tinas Wedding</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Rsvp />
			<Hero />
			<Section id='welcome' title='Welcome'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Magnam modi cupiditate quas accusamus, incidunt corporis
					voluptates id tempore ut nobis.
				</p>
			</Section>
			<Section id='the-c-word' title='Covid'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Magnam modi cupiditate quas accusamus, incidunt corporis
					voluptates id tempore ut nobis.
				</p>
			</Section>
			<Section id='gifts' title='Gifts'>
				<Gifting />
			</Section>
			<Section id='day-and-night' title='Day and night'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Magnam modi cupiditate quas accusamus, incidunt corporis
					voluptates id tempore ut nobis.
				</p>
				<DayAndNight events={events} />
			</Section>
		</>
	);
}

export async function getStaticProps() {
	const itemRecords = await table('Events').select({}).firstPage();
	const events = getMinifiedRecords(itemRecords);
	console.log(events);
	return {
		props: {
			events: events,
		},
	};
}
