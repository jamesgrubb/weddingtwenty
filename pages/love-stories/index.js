import { table, getMinifiedRecords } from '../api/utils/Airtable';
import LoveStories from '../../components/Forms/LoveStories/LoveStories';

function LoveNotes({ stories }) {
	return (
		<div className='flex items-center justify-center h-full bg-red-400'>
			<div className='w-1/2 overflow-x-hidden rounded shadow'>
				<LoveStories />
			</div>
		</div>
	);
}

export default LoveNotes;

export const getStaticProps = async () => {
	const records = await table('LoveStories')
		.select({ view: 'Grid view' })
		.firstPage();
	const minifiedRecords = getMinifiedRecords(records);
	return {
		props: {
			stories: minifiedRecords.map((record) => record),
		},
		revalidate: 10,
	};
};
