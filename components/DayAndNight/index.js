const DayAndNight = ({ events }) => {
	return (
		<div className='w-full'>
			<ul className='flex flex-col'>
				{events
					? events.map((event) => {
							const { Time, Event } = event.fields;
							return (
								<li
									key={event.id}
									className='flex items-center justify-between w-full py-4 hover:bg-teal-200'>
									<div className='flex-1'>
										<div className='relative flex items-center justify-between w-full font-mono after:w-full after:border-b after:mx-1 after:border-gray-500'>
											<em className='inline-flex py-2 not-italic'>
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
