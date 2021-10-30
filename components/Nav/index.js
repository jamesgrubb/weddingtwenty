import React from 'react';
import { NavItems } from '../../pages/api/utils/NavItems';
import Link from 'next/link';

function Nav() {
	return (
		<nav>
			<ul>
				{NavItems.map((item, i) => {
					return (
						<li key={i}>
							<Link href={item.link}>{item.item}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Nav;
