import React from 'react';
export default function Night(props) {
	return (
		<div className='w-full prose-lg p2 sm:p-4'>
			<p>{props.name}</p>
			<p>
				So glad you can make it. We will see you on the evening of the
				28th December
			</p>
		</div>
	);
}
