import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Tent from '../../components/Svg/Tent';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

if (process.client) {
	gsap.registerPlugin(drawSVGplugin);
}

import Sleeps from '../Sleeps';
import Confetti from '../Svg/Confetti';
import React from 'react';
import { random } from 'gsap/gsap-core';

const Hero = () => {
	const confettiRef = useRef();
	const smokeRef = useRef();
	const tentRef = useRef();
	console.log(`tentRef`, tentRef.current);
	useEffect(() => {
		console.log(smokeRef.current.children[0]);
		const tl = gsap.timeline({ defaults: { duration: 2 } });
		const smokeTl = gsap.timeline({
			defaults: {
				duration: 2,
			},
		});
		tl.set(confettiRef.current.children, {
			opacity: 0,
		});
		smokeTl.set(smokeRef.current.children, {
			// opacity: gsap.utils.wrap([1, 0.5, 1, 0.8, 0.2]),
			opacity: 1,
			stroke: gsap.utils.wrap([
				'red',
				'white',
				'violet',
				'cornflowerblue',
				'white',
			]),
			'stroke-width': gsap.utils.wrap([1, 4, 2, 6, 4]),
		});
		smokeTl.fromTo(
			smokeRef.current.children,
			{ drawSVG: '-10% 0%', y: 0 },
			{
				drawSVG: '110% 110%',
				stroke: gsap.utils.wrap([
					'red',
					'white',
					'violet',
					'cornflowerblue',
					'white',
				]),
				repeat: -1,
				ease: 'power1.inOut',
			}
		);
		smokeTl.fromTo(
			smokeRef.current.children,
			{ drawSVG: '100%', y: 0 },
			{
				drawSVG: '120% 140%',
				repeat: -1,
				stroke: 'white',
				ease: 'power1.inOut',
			}
		);
		// smokeTl.fromTo(
		// 	smokeRef.current.children,
		// 	{ drawSVG: '120% 140%', y: 0 },
		// 	{
		// 		drawSVG: '200% 200%',

		// 		stroke: 'white',
		// 		ease: 'power1.inOut',
		// 	}
		// );

		tl.to(confettiRef.current.children, {
			opacity: 1,
			y: 50,
			stagger: {
				amount: 5,
				from: 'random',
				grid: 'auto',
			},
		});
	});

	return (
		<div className='flex flex-col items-center w-screen h-screen justify-evenly'>
			<div className='container flex flex-col items-center justify-center py-16 pb-16 mt-16 space-y-4 uppercase sm:py-0 sm:pb-20 lg:w-full md:items-end sm:mt-20'>
				<h2 className='w-full text-3xl prose-sm text-center text-teal-100 md:text-right lg:w-2/3 sm:text-5xl font-hatton'>
					Celeb<div className='inline-flex'>r</div>
					<div className='inline-flex'>r</div>
					<div className='inline-flex'>r</div>
					<div className='inline-flex'>r</div>ate
				</h2>
				<figure className='pointer-events-none relative flex justify-center w-2/5 h-full md:w-full md:max-w-[16vmax] p-0 m-0 md:absolute left-0 md:top-0 lg:left-1/4 bottom-0 '>
					<Tent ref={tentRef} />
					<svg
						className='absolute overflow-visible bottom-full -left-4'
						xmlns='http://www.w3.org/2000/svg'
						width='60%'
						height='60%'
						fill='none'
						viewBox='0 0 147 414'>
						<g
							className='overflow-visible'
							ref={smokeRef}
							stroke='#000'>
							<path d='M79.456 413.5c-15-4.3-28.1-13.7-35.8-27.3-6.9-12.2-9.1-27.1-5.9-40.7 1.9-8.1 5.9-16.1 12.9-20.4 7-4.3 17.5-3.6 22.3 3.1 4.5 6.3 2.4 15.7-3.3 20.9-15.4 14-39.1 1.3-48.8-13.6-12.5-19.2-6.9-46 1.4-65.6 9-21.3 22.6-40.6 29.6-62.6 11.6-37.1 1.8-80.1-24.7-108.5'></path>
							<path d='M45.356 282.9c-7.2-2.7-24.8-10.3-34.1-28.2-12.9-24.9-3-57.9 15.2-77.5 10.8-11.6 24.9-19.7 37.3-29.6 23.6-19 60.8-63.6 35.9-95.2-21.8-27.8-58.4 10.8-34 32.7 5.8 5.2 14.4 5.4 22 3.9 40.4-7.9 59.9-50.6 57.7-88.4'></path>
							<path d='M71.256 391.1c15.8-15.2 26.4-35.5 24.6-57.9-1.4-17.2-10.1-33.8-23.5-44.7-6.4-5.3-14-9.4-18.5-16.4-5.2-7.9-5.5-18.2-3.1-27.4 3.4-12.6 10.9-25 19.4-34.8'></path>
							<path d='M55.855 373.7c-13.8-4.1-27.1-10.7-37.4-20.8-10.3-10.1-17.3-23.8-17.7-38.2-.3-13.2 4.9-26.1 12.4-37 8.6-12.6 20.1-23.8 31.7-33.8 22.5-19.4 53.2-28.3 71.901-52.3 19-24.3 19.1-60.1 1.5-85.1'></path>
							<path d='M82.956 185.2c-4.6-5.1-10.4-12.9-14.1-23.5-9.5-27.2 1.7-51.7 4.7-57.6'></path>
						</g>
					</svg>

					<Confetti ref={confettiRef} />
				</figure>
				<h1 className='w-full text-3xl text-center text-gray-500 md:text-right md:w-1/2 lg:w-1/2 lg:text-7xl'>
					james and tina's wedding
				</h1>
				<div className='w-2/3 text-center md:text-right'>
					<p className='text-2xl uppercase font-hatton'>
						28 December 2021
					</p>
					<p className='uppercase font-hatton'>
						<Sleeps className='font-lora' /> sleeps to go
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
