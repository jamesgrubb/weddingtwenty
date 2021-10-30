import React from 'react';
import { NavItems } from '../../pages/api/utils/NavItems';
import Link from 'next/link';
import { useRouter } from 'next/router';
function Nav() {
	const router = useRouter();
	const { asPath } = router;

	console.log(`router`, router);
	const linkStyles =
		'relative flex hover:after:transition-all after:scale-x-0 after:absolute after:w-full after:border-b after:border-gray-900 hover:after:scale-x-100 hover:text-gray-900 hover:after:absolute hover:after:w-full hover:after:border-b hover:after:border-gray-900';
	const LinkStylesActive =
		'relative flex hover:after:transition-all text-gray-900 after:scale-x-100 after:absolute after:w-full after:border-b after:border-gray-900 hover:after:scale-x-100 hover:text-gray-900 hover:after:absolute hover:after:w-full hover:after:border-b hover:after:border-gray-900';
	return (
		<nav>
			<ul className='hidden space-x-4 font-mono text-sm font-light text-teal-500 lowercase md:flex'>
				{NavItems.map((item, i) => {
					return (
						<li
							className={
								router.asPath === item.link
									? LinkStylesActive
									: linkStyles
							}
							key={i}>
							<Link href={item.link}>
								<a
									aria-current={
										asPath === item.link
											? 'page'
											: undefined
									}>
									{item.item}
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Nav;
