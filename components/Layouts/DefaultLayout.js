import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavItems } from '../../pages/api/utils/NavItems';
import Link from 'next/link';
const DefaultLayout = ({ children }) => {
	return (
		<div className='flex flex-col mx-auto flex-nowrap'>
			<header className='bg-gray-100 '>
				<div className='container flex items-center justify-between w-full py-12 mx-auto '>
					<strong className='text-base text-gray-600'>
						james&tina
					</strong>
					<nav>
						<ul className='flex font-light text-gray-700'>
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
			<main className='w-full'>{children}</main>
			<ToastContainer />
		</div>
	);
};

export default DefaultLayout;
