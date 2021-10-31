import React, { useState, useEffect } from 'react';

import Night from '../Night';
import DayAndNight from '../DayAndNight';
export default function Accept() {
	const [night, setNight] = useState();
	const [guest, setGuest] = useState();

	return (
		<div className='flex flex-col w-full prose-sm flex-nowrap sm:prose-lg'>
			<p className=''>
				<Night />
				<DayAndNight />
			</p>
		</div>
	);
}
