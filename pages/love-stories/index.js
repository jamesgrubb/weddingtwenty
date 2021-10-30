import { table, getMinifiedRecords } from '../api/utils/Airtable';
import LoveStories from '../../components/Forms/LoveStories/LoveStories';

<<<<<<< HEAD
function LoveNotes() {
	return (
		<div className='flex items-center justify-center h-full'>
			<div className='w-[95vw] overflow-x-hidden rounded shadow sm:w-1/2'>
=======
function LoveNotes({ stories }) {
	return (
		<div className='flex items-center justify-center h-full '>
			<div className='w-[95vw] sm:w-1/2 overflow-x-hidden rounded shadow'>
>>>>>>> p5
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
<<<<<<< HEAD

=======
>>>>>>> p5
	return {
		props: {
			stories: minifiedRecords.map((record) => record),
		},
		revalidate: 10,
	};
};
