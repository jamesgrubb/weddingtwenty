import React from 'react';
import PropTypes from 'prop-types';
import { sleeps } from '../../pages/api/utils/Sleeps';
CWord.propTypes = {
	level: PropTypes.string,
};

function CWord(props) {
	return (
		<>
			<p>
				With {sleeps()} days to go until our big day, we’re hopeful and
				cautiously optimistic that the current rules hold and all will
				go to plan. Even if it means we may have to have the odd flap up
				on the tipi (blankets will be provided;).
			</p>
			<p>
				To help keep all of you safe and well whilst celebrating with
				us, and whilst by no means is it a requirement of attendance, we
				would be very grateful if you could take a lateral flow test
				before arriving at the venue.
			</p>
			<p>
				With keeping healthy in mind, we plan to keep a low profile a
				few weeks before the wedding and would really appreciate it if
				everyone could be as careful as they can leading up to the day
				but fully appreciate it is a bit tricky, it is Christmas after
				all.
			</p>
		</>
	);
}

export default CWord;
