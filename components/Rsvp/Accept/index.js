import React, { useState, useEffect } from 'react';
import AcceptForm from '../../Forms/AcceptForm';
import Night from '../Night';
import DayAndNight from '../Day';
export default function Accept() {
	const [night, setNight] = useState();
	const [guest, setGuest] = useState();

	return (
		<div className='flex flex-col w-full prose-sm flex-nowrap sm:prose-lg'>
			<Night />
			<DayAndNight />
		</div>
	);
}
