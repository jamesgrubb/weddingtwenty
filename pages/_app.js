import DefaultLayout from '../components/Layouts/DefaultLayout';
import '../Styles/tailwind.css';

function MyApp({ Component, pageProps }) {
	return (
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	);
}

export default MyApp;
