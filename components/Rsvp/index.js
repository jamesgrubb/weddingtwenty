const Rsvp = () => {
	return (
		<div className='fixed bottom-0 left-0 flex items-center justify-center w-full bg-teal-200 bg-opacity-90'>
			<div className='container flex flex-wrap items-center justify-center py-8 space-x-4 border border-t-teal-900'>
				<strong className='font-mono'>
					{' '}
					Please lets us know of you can attend
				</strong>
				<button
					type='button'
					className='inline-flex px-4 py-2 uppercase bg-gray-700 text-teal-50 font-hatton'>
					rsvp
				</button>
			</div>
		</div>
	);
};

export default Rsvp;
