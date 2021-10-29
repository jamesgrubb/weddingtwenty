import { table, getMinifiedRecords } from '../api/utils/Airtable';
import LoveStories from '../../components/Forms/LoveStories/LoveStories';

function LoveNotes({ stories }) {
	console.log(`stories`, stories);
	return (
		<>
			<LoveStories />
		</>
	);
}

export default LoveNotes;

export const getStaticProps = async () => {
	const records = await table('LoveStories')
		.select({ view: 'Grid view' })
		.firstPage();
	const minifiedRecords = getMinifiedRecords(records);
	console.log(minifiedRecords);
	return {
		props: {
			stories: minifiedRecords.map((record) => record),
		},
		revalidate: 10,
	};
};
