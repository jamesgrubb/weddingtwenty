import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Brand from '../Svg/Brand';
import Nav from '../Nav';

const DefaultLayout = ({ children }) => {
	return (
		<div className='flex flex-col items-center h-full min-h-screen bg-teal-300 flex-nowrap'>
			<header className='container z-10 w-full transform translate-x-0'>
				<div className=' max-w-[95vw] sm:w-full flex items-baseline justify-between w-full py-4 mx-auto space-x-8 border-b border-gray-700 '>
					<span className='relative flex justify-end w-16 text-base text-gray-700 uppercase hover:tex t-gray-900 after:-right-2 font-hatton after:border after:border-gray-700 after:h-full after:absolute'>
						<Link href='/'>
							<a>
								<Brand ariaRole='hidden' />
							</a>
						</Link>
					</span>
					<Nav />
				</div>
			</header>
			<main className='w-full h-full min-h-full bg-teal-300 space-y-36'>
				{children}
			</main>
		</div>
	);
};

export default DefaultLayout;
