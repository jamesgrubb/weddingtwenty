import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavItems } from '../../pages/api/utils/NavItems';
import Link from 'next/link';
import Brand from '../Svg/Brand';
const DefaultLayout = ({ children }) => {
	return (
		<div className='flex flex-col mx-auto flex-nowrap'>
			<header className='fixed top-0 left-0 right-0 bg-opacity-100 '>
				<div className='container flex items-baseline justify-between w-full py-8 mx-auto space-x-8 border-b border-gray-700 '>
					<span className='relative flex justify-end w-16 text-base text-gray-700 uppercase hover:tex t-gray-900 after:-right-2 font-hatton after:border after:border-gray-700 after:h-full after:absolute'>
						<Link href='/'>
							<a>
								<Brand ariaRole='hidden' />
							</a>
						</Link>
					</span>
					<nav>
						<ul className='flex space-x-4 font-mono text-sm font-light text-gray-700 lowercase'>
							{NavItems.map((item, i) => {
								return (
									<li key={i} className=''>
										<Link href={item.link}>
											{item.item}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</header>
			<main className='w-full bg-teal-300 space-y-36'>{children}</main>
			<ToastContainer />
		</div>
	);
};

export default DefaultLayout;
