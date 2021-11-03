import { table, getMinifiedRecords } from '../api/utils/Airtable';
import LoveStories from '../../components/Forms/LoveStories/LoveStories';

function LoveNotes({ stories }) {
	return (
		<div className='z-10 items-center justify-center block w-full h-full mt-20 transform translate-x-0 sm:flex '>
			<div className='w-full pt-16 rounded shadow sm:pt-0 sm:w-3/4'>
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
