import React from 'react';

function NotFound(props) {
	return (
		<p className='prose-sm sm:prose'>
			Oops could not match your name to the guest list. You typed{' '}
			{props.guestName} {props.guestSurname}. Please try again
		</p>
	);
}

export default NotFound;
