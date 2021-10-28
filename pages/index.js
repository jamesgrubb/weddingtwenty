import Head from 'next/head';
import { FindGuest } from '../components/Forms/FindGuest/FindGuest';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Rsvp from '../components/Rsvp';
export default function Home() {
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
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Magnam modi cupiditate quas accusamus, incidunt corporis
					voluptates id tempore ut nobis.
				</p>
			</Section>
			<Section id='day-and-night' title='Day and night'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Magnam modi cupiditate quas accusamus, incidunt corporis
					voluptates id tempore ut nobis.
				</p>
			</Section>
		</>
	);
}
