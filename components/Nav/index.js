import React from 'react';
import { NavItems } from '../../pages/api/utils/NavItems';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Nav = React.forwardRef((props, ref) => {
	const router = useRouter();
	const { asPath } = router;
	const linkStyles =
		'relative flex hover:after:transition-all after:scale-x-0 after:absolute after:w-full after:border-b after:border-gray-900 hover:after:scale-x-100 hover:text-gray-900 hover:after:absolute hover:after:w-full hover:after:border-b hover:after:border-gray-900';
	const LinkStylesActive =
		'relative flex hover:after:transition-all text-gray-900 after:scale-x-100 after:absolute after:w-full after:border-b after:border-gray-900 hover:after:scale-x-100 hover:text-gray-900 hover:after:absolute hover:after:w-full hover:after:border-b hover:after:border-gray-900';
	return (
		<nav className=''>
			<ul ref={ref} className={props.classes}>
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
});

export default Nav;
