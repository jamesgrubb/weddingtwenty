import React from 'react';

function ThankYou(props) {
	return (
		<div className='prose-sm sm:prose'>
			<p>
				Thank you{' '}
				<span className='tracking-widest uppercase font-hatton'>
					{props.guest}
				</span>{' '}
				hopefully see you on the 28th. If you have any other questions
				please email{' '}
				<a href='mailto:rsvp@jamesandtinawedding.com'>
					rsvp@jamesandtinawedding.com
				</a>
			</p>
		</div>
	);
}

export default ThankYou;
