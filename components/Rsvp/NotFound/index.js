import React from 'react';

function NotFound(props) {
	return (
		<p className='font-mono italic font-light prose-sm text-red-400 sm:prose'>
			Oops could not match your name to the guest list. Please try again
			Maybe a variation of your Surname if it contains two names?
		</p>
	);
}

export default NotFound;
