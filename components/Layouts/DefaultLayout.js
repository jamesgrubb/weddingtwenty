import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavItems } from '../../pages/api/utils/NavItems';
import Link from 'next/link';
const DefaultLayout = ({ children }) => {
	console.log(
		'🚀 ~ file: DefaultLayout.js ~ line 28 ~ DefaultLayout ~ NavItems',
		NavItems
	);
	return (
		<div className='container flex flex-col mx-auto sm:px-4 flex-nowrap'>
			<header className='w-full py-12 bg-gray-100'>
				<strong className='inline-flex text-base text-gray-600'>
					james&tina
				</strong>
				<nav>
					<ul className='flex'>
						{NavItems.map((item, i) => {
							return (
								<li key={i} className='uppercase'>
									<Link href={item.link}>{item.item}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			<main className='w-full'>{children}</main>
			<ToastContainer />
		</div>
	);
};

export default DefaultLayout;
