import Head from 'next/head';
import { FindGuest } from '../components/Forms/FindGuest/FindGuest';
export default function Home() {
	return (
		<>
			<Head>
				<title>James&Tinas Wedding</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<FindGuest />
		</>
	);
}
