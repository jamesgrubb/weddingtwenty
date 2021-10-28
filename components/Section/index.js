const Section = (props) => {
	return (
		<div
			id={props.id}
			className='flex items-center min-h-[70vh] justify-center w-full bg-teal-300'>
			<div className='container h-full px-4 sm:px-0 py-38'>
				<h2 className='text-3xl prose-2xl text-gray-600 uppercase sm:text-6xl'>
					{props.title}
				</h2>
				<div className='prose sm:prose-xl font-lora max-w-[50ch]'>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Section;
