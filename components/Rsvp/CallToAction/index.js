const Cta = (props) => {
	return (
		<div className='fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-16 space-x-4 text-center bg-fixed bg-blue-500 bg-top sm:h-20'>
			<strong className='font-normal text-teal-300 font-lora'>
				{' '}
				<button
					onClick={props.handleClick}
					type='button'
					className='btn'>
					RSVP
				</button>
			</strong>
		</div>
	);
};

export default Cta;
