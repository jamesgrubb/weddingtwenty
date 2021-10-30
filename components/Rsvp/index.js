const Rsvp = () => {
	return (
		<div className='fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-16 bg-teal-200 sm:h-20 bg-opacity-90'>
			<div className='container flex flex-wrap items-center justify-center space-x-4 border border-t-teal-900'>
				<strong className='font-mono'>
					{' '}
					Please lets us know of you can attend
				</strong>
				<button type='button' className='btn'>
					rsvp
				</button>
			</div>
		</div>
	);
};

export default Rsvp;
