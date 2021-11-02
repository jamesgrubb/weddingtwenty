import React from 'react';

function Declined(props) {
	return (
		<div className='text-base prose-sm font-lora sm:prose'>
			<p>
				<span className='tracking-widest uppercase font-hatton text-md'>
					{props.guest}
				</span>
				, sorry we wont be seeing you on the 28th.<br></br>
				Thanks for letting us know.
			</p>
		</div>
	);
}

export default Declined;
