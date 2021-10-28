import React from 'react';

function Venue() {
	return (
		<div className='flex items-center w-full'>
			<div className='container py-4 md:py-4'>
				<address className='font-mono not-italic'>
					Tuddenham Mill High Street,
					<br />
					Tuddenham Nr Bury St Edmunds,
					<br /> Suffolk IP28 6SQ
					<br />
					<a href='mailto:info@tuddenhammill.co.uk'>
						info@tuddenhammill.co.uk
					</a>
					<br />
					<a href='tel:+4401638713552'>01638 713552</a>
					<br />
					Website{' '}
					<a href='https://www.tuddenhammill.co.uk'>
						tuddenhammill.co.uk
					</a>
				</address>
				<p>
					Tuddenham Mill High Street, Tuddenham Nr Bury St Edmunds,
					SuffolkIP28 6SQ Telephone 01638 713552 Email
					info@tuddenhammill.co.uk Website tuddenhammill.co.uk There
					are a few rooms available at the venue, if you haven't
					contacted us already and if you would like to stay speak to
					Lucy and mention you are part of the wedding party. There is
					also a more affordable B&B a few miles away Church
					Farmhouse, The Street Herringswell, Kennett, IP28 6ST,
					United Kingdom which you can find on Booking .com The
					nearest larger towns are Bury St Edmunds or Newmarket these
					are about 30mins drive a way.
				</p>
			</div>
		</div>
	);
}

export default Venue;
