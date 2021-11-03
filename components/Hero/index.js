import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import TentAndSmoke from '../../components/Svg/TentAndSmoke';
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
	const tentAndSmokeRef = useRef();

	useEffect(() => {
		console.log(
			`tentAndSmokeRef.current`,
			tentAndSmokeRef.current.children
		);
		const tl = gsap.timeline({ defaults: { duration: 2 } });
		const smokeTl = gsap.timeline({
			defaults: {
				duration: 2,
			},
		});
		tl.set(confettiRef.current.children, {
			y: -50,
			opacity: 0,
		});

		const targets = gsap.utils.toArray(tentAndSmokeRef.current.children);

		targets.forEach((obj, i) => {
			const tl = gsap.timeline({ repeat: -1, delay: i * 0.4 });
			tl.set(obj, { 'stroke-width': 2 });
			tl.from(obj, { duration: 3, drawSVG: '0% 0%' });
			tl.to(obj, { duration: 1, drawSVG: '100% 100%' }, 2);
		});

		// smokeTl.set(tentAndSmokeRef.current.children, {
		// 	opacity: gsap.utils.wrap([1, 0.5, 1, 0.8, 0.2]),
		// 	opacity: 1,
		// 	stroke: gsap.utils.wrap(['white']),
		// 	'stroke-width': gsap.utils.wrap([1, 4, 2, 6, 4]),
		// });
		// smokeTl.fromTo(
		// 	tentAndSmokeRef.current.children,
		// 	{ drawSVG: '-10% 0%', y: 0 },
		// 	{
		// 		drawSVG: '110% 110%',
		// 		stroke: gsap.utils.wrap([
		// 			'red',
		// 			'white',
		// 			'violet',
		// 			'cornflowerblue',
		// 			'white',
		// 		]),
		// 		repeat: -1,
		// 		ease: 'power1.inOut',
		// 	}
		// );
		// smokeTl.fromTo(
		// 	tentAndSmokeRef.current.children,
		// 	{ drawSVG: '100%', y: 0 },
		// 	{
		// 		drawSVG: '120% 140%',
		// 		repeat: -1,
		// 		stroke: 'white',
		// 		ease: 'power1.inOut',
		// 	}
		// );
		// smokeTl.fromTo(
		// 	tentAndSmokeRef.current.children,
		// 	{ drawSVG: '120% 140%', y: 0 },
		// 	{
		// 		drawSVG: '200% 200%',

		// 		stroke: 'white',
		// 		ease: 'power1.inOut',
		// 	}
		// );

		tl.to(confettiRef.current.children, {
			opacity: 0.9,
			y: 50,
			stagger: {
				amount: 5,
				from: 'random',
				grid: 'auto',
			},
		});
	});

	return (
		<div className='flex items-center justify-center w-screen h-screen'>
			<div className='container relative flex flex-col items-center h-full py-16 pb-16 mt-16 space-y-4 uppercase justify-evenly sm:py-0 sm:pb-20 lg:w-full sm:mt-20'>
				<h2 className='w-2/3 text-3xl text-center sm:text-right text-teal-10 sm:text-5xl font-hatton'>
					Celeb<div className='inline-flex'>r</div>
					<div className='inline-flex'>r</div>
					<div className='inline-flex'>r</div>
					<div className='inline-flex'>r</div>ate
				</h2>

				<figure className=' md:absolute md:right-0'>
					<TentAndSmoke ref={tentAndSmokeRef} />
				</figure>
				<Confetti ref={confettiRef} />
				<div className='z-0 w-full text-center sm:w-1/2 md:w-2/3 sm:text-right'>
					<h1 className='w-full text-3xl text-gray-600 sm:w-2/3 sm:ml-auto md:text-right lg:text-7xl'>
						james and tina's wedding
					</h1>
					<p className='text-2xl text-gray-600 uppercase font-hatton'>
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
