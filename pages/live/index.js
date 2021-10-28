import ReactPlayer from 'react-player/lazy';

const Live = (props) => {
	return (
		<div className='flex items-center justify-center w-full h-screen'>
			<ReactPlayer />
		</div>
	);
};

export default Live;

export async function getStaticProps() {
	return {
		props: {
			live: 'live',
		},
	};
}
