const DayAndNight = ({ events }) => {
	return (
		<div className='w-full flex-justify-center'>
			<ul className='container flex flex-col list-none spacey-8 prose:list-none'>
				{events
					? events.map((event) => {
							const { Time, Event } = event.fields;
							return (
								<li
									key={event.id}
									className='flex items-center justify-between w-full py-4 hover:bg-teal-200'>
									<div className='flex-1'>
										<div className='relative flex items-center justify-between w-full font-mono after:w-full after:border-b after:mx-1 after:border-gray-500'>
											<em className='inline-flex px-3 py-2 not-italic bg-teal-200'>
												{Time}
											</em>
										</div>
									</div>
									<div className='w-3/4'>{Event}</div>
								</li>
							);
					  })
					: ''}
			</ul>
		</div>
	);
};

export default DayAndNight;
