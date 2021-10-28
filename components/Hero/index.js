import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import drawSVG from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(drawSVG);

import Sleeps from '../Sleeps';
import Confetti from '../Svg/Confetti';
import React from 'react';
import { random } from 'gsap/gsap-core';

const Hero = () => {
	// const confetti = useRef();
	const confettiRef = useRef();
	const smokeRef = useRef();
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
		<div className='flex flex-col items-center justify-center w-screen min-h-screen space-y-16 bg-teal-300'>
			<div className='container relative flex flex-col items-center justify-center mt-40 space-y-4 uppercase lg:w-full md:items-end'>
				<h2 className='w-full text-5xl prose-sm text-center text-teal-100 md:text-right lg:w-2/3 sm:text-5xl font-hatton'>
					Celeb<div className='inline-flex'>r</div>
					<div className='inline-flex'>r</div>
					<div className='inline-flex'>r</div>
					<div className='inline-flex'>r</div>ate
				</h2>
				<figure className=' pointer-events-none relative flex justify-center w-1/5 md:w-full md:max-w-[200px] p-0 m-0 md:absolute left-0 lg:left-1/4 bottom-0 '>
					<svg
						className='absolute overflow-visible bottom-3/4 -left-4'
						xmlns='http://www.w3.org/2000/svg'
						width='100%'
						height='100%'
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
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='100%'
						height='100%'
						fill='none'
						viewBox='0 0 253 424'>
						<path
							fill='#706F6F'
							d='M252.299 395.939c-1.656-2.731-4.292-4.791-7.057-6.286a21.405 21.405 0 00-6.401-2.346 1.428 1.428 0 00-.634-.806c-.302-.18-.66-.24-1.003-.168a1.669 1.669 0 00-1.012.751h-.043a1.033 1.033 0 00-.208 0c-.35-.23-.699-.46-1.043-.702a1.396 1.396 0 00-1.906.509 1.462 1.462 0 00-.131 1.067c.094.359.32.669.633.863 5.206 3.767 11.073 6.249 16.739 9.191 1.275.688 2.887-.702 2.066-2.073zM235.34 392.83a2.153 2.153 0 00-.405-.081 3.337 3.337 0 00-.962.038c-.883.13-.687 1.694.214 1.594h.294v.211l.037.149a.737.737 0 010 .199v.502c-.055.305-.11.621-.178.913a17.93 17.93 0 01-.576 1.967 37.42 37.42 0 01-.656 1.731l-.116.286v.074c-1.122 2.662-2.576 5.231-3.514 7.962a1.748 1.748 0 00.447 1.67 1.708 1.708 0 001.65.452c1.3-.378 1.938-1.322 2.827-2.246a1.623 1.623 0 00.375-1.238 1.585 1.585 0 00-.651-1.114c.392-.919.785-1.862 1.152-2.768.914-2.302 2.079-4.933 2.067-7.447-.006-1.117-.607-3.319-2.005-2.854zM18.799 408.671a1.041 1.041 0 00-.347-.588 2.96 2.96 0 00-.485-.875c-.63-.876-1.129-1.811-1.646-2.74-1.33-2.404-2.56-4.861-3.946-7.242a20.292 20.292 0 00-2.188-3.174c-.032-.036-.076-.065-.114-.1 1.223-.7 2.44-1.417 3.613-2.187a15.302 15.302 0 002.843-2.21 2.7 2.7 0 00.82-1.764 1.7 1.7 0 00-.492-1.128c.278.335.088.064-.1-.1a1.456 1.456 0 00-.404-.265c-.763-.311-1.848.118-1.829.929l-.189.229-.113.13a.694.694 0 01.113-.13.56.56 0 00-.063.059c-.145.147-.284.294-.435.429-.151.135-.334.288-.51.429l-.31.241-.226.165c-.057.047-.208.147-.246.176l-.328.224-.328.217a1.235 1.235 0 00-.27-.545 1.353 1.353 0 00-.51-.368 1.456 1.456 0 00-1.25.067c-3.518 1.922-8.196 3.873-9.236 7.947-.278 1.099 1.046 2.252 2.169 1.558 1.374-.847 2.793-1.623 4.217-2.398.07.276.196.538.372.77l.057.088c.057.088.139.176.202.27.17.229.334.47.492.711.346.547.68 1.1.996 1.658a125.643 125.643 0 012.175 4.015 157.274 157.274 0 002.1 3.909c.63 1.105 1.348 2.775 2.691 3.21.071.029.145.053.221.07h.1c.262.113.545.175.833.183.243-.005.482-.06.7-.162a1.59 1.59 0 00.556-.427c.148-.179.252-.387.303-.609a1.418 1.418 0 00-.008-.672z'></path>
						<path
							stroke='#706F6F'
							strokeWidth='9.036'
							d='M3.02 418.668L252.549 418.668'></path>
						<path
							fill='#706F6F'
							d='M113.226 77.355c-4.286-4.016-9.559-6.835-13.808-10.878a1.54 1.54 0 00-2.476.561c-.121.31-.138.65-.046.97-1.133.78-2.084 1.814-3.19 2.657-1.644 1.242-3.38 2.347-5.135 3.426-3.427 2.112-6.954 4.043-10.38 6.146a1.897 1.897 0 00-.828 1.037 1.88 1.88 0 00.058 1.32c.178.42.503.762.914.963.412.201.883.248 1.327.134 2.887-.698 5.811-1.242 8.754-1.686 2.028 10.669 1.636 21.683 2.056 32.488.265 6.962-.33 13.923.822 20.849.521 3.163 1.49 7.442 4.962 8.539 1.782.562 2.742-1.65 1.682-2.865.246.291-.156-.281-.22-.38a2.578 2.578 0 00-.146-.281l-.237-.318-.064-.09a6.51 6.51 0 01-.42-.68c-.083-.136-.147-.272-.22-.417l-.055-.109a.708.708 0 000-.109 19.905 19.905 0 01-1.087-4.296 71.457 71.457 0 01-.549-10.47c0-4.959-.082-9.908-.173-14.866 2.898.279 5.824.002 8.617-.816h.046c0 6.807-.128 13.597-.073 20.414.029.375.2.726.479.981a1.514 1.514 0 002.048 0c.278-.255.449-.606.479-.981.146-16.027.585-32.035.265-48.044v-.072c1.828 0 3.555 0 5.327.081a1.887 1.887 0 001.701-1.19 1.867 1.867 0 00-.43-2.019zm-9.824 24.239a.486.486 0 00-.201 0c-1.901.054-3.783.145-5.684.109a13.65 13.65 0 01-2.175-.155 4.381 4.381 0 01-.63-.136.35.35 0 00-.146-.398c0-.762 0-1.523-.055-2.285l-.082-2.257a7.597 7.597 0 003.317.453 11.8 11.8 0 005.638-1.813c0 2.185.009 4.333.018 6.482zm-.064-7.678A10.653 10.653 0 0197.91 95.8a5.52 5.52 0 01-3.582-.698 114.25 114.25 0 00-.566-7.061 5.52 5.52 0 001.114.172c1.873.106 3.752.003 5.602-.308.9-.109 1.789-.29 2.659-.544.092 2.206.159 4.39.201 6.554zm-.274-7.578a22.024 22.024 0 01-5.958.816c-.87.042-1.74.012-2.604-.091-.21 0-.42-.118-.64-.154a.432.432 0 00-.292-.48 80.403 80.403 0 00-.613-3.898c3.308-.146 6.635-.218 9.952-.164a291.6 291.6 0 01.183 3.962l-.028.009zm0 20.849c-2.72.759-5.562.99-8.37.68a579.52 579.52 0 00-.137-5.494 5.83 5.83 0 002.156.363c2.157.1 4.332-.073 6.488-.154a.73.73 0 00.201-.055v4.669a.45.45 0 00-.338.018v-.027zm-7.932-29.805c-1.882.19-3.774.426-5.656.68.502-.3 1.014-.59 1.517-.907 1.736-1.06 3.454-2.157 5.09-3.372a13.822 13.822 0 003.362-3.091c2.34 2.121 4.889 3.997 7.311 5.974-3.856.072-7.758.344-11.624.743v-.027z'></path>
						<path
							fill='#706F6F'
							d='M215.249 371.64l-12.492-43.421.092-.172-41.89-145.079L128.56 70.379l8.878-30.358c4.694-15.787 5.549-23.04 13.663-39.682h-8.539c-1.28 16.63-5.124 23.896-9.818 40.107l-6.393 22.105-6.312-22.06c-4.694-16.21-7.259-23.465-8.539-40.106H93.568c8.114 16.63 10.674 23.895 15.367 40.106l10.071 34.98c-1.113 4.278-2.295 8.149-2.789 10.322l-83.71 286.271c-4.694 15.787-5.549 23.041-13.663 39.682h8.539c1.28-16.629 5.124-23.895 9.818-40.106l25.197-86.618 1.28-4.266 57.641-196.69 41.889 145.052 32.393 112.56 8.567 29.974c4.694 16.211 7.259 23.465 8.539 40.106h17.932c-8.131-16.653-10.69-23.907-15.39-40.118z'></path>
					</svg>
					<svg
						className='absolute top-1/2'
						ref={confettiRef}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						width='100%'
						height='100%'
						viewBox='0 0 449 478'>
						<circle
							cx='228.262'
							cy='120.123'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='45.612'
							cy='176.893'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='138.635'
							cy='88.449'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='132.3'
							cy='221.267'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='320.307'
							cy='56.281'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='144.97'
							cy='31.138'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='228.262'
							cy='101.118'
							r='6.335'
							fill='#F02EC5'></circle>
						<circle
							cx='6.499'
							cy='113.277'
							r='6.335'
							fill='#F02EC5'></circle>
						<circle
							cx='199.692'
							cy='120.123'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='193.357'
							cy='252.941'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='176.387'
							cy='7.117'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='206.568'
							cy='88.449'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='405.563'
							cy='144.441'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='282.809'
							cy='82.114'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='344.876'
							cy='232.278'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='257.81'
							cy='113.788'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='215.592'
							cy='350.767'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='110.495'
							cy='82.114'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='104.161'
							cy='214.932'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='351.211'
							cy='59.317'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='302.305'
							cy='18.469'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='441.73'
							cy='75.779'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='435.395'
							cy='208.597'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='166.434'
							cy='94.784'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='344.876'
							cy='350.767'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='351.211'
							cy='113.788'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='257.81'
							cy='464.58'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='144.97'
							cy='59.317'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='177.788'
							cy='31.138'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='64.616'
							cy='119.612'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='32.942'
							cy='350.767'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='326.642'
							cy='84.601'
							r='6.335'
							fill='#7409FB'
							fillOpacity='0.94'></circle>
						<circle
							cx='405.563'
							cy='320.616'
							r='6.335'
							fill='#7409FB'
							fillOpacity='0.94'></circle>
						<circle
							cx='293.093'
							cy='106.943'
							r='6.335'
							fill='#7409FB'
							fillOpacity='0.94'></circle>
						<circle
							cx='144.97'
							cy='470.915'
							r='6.335'
							fill='#7409FB'
							fillOpacity='0.94'></circle>
						<circle
							cx='326.642'
							cy='24.803'
							r='6.335'
							fill='#7409FB'
							fillOpacity='0.94'></circle>
						<circle
							cx='251.475'
							cy='88.449'
							r='6.335'
							fill='#0FB5FD'></circle>
						<circle
							cx='245.141'
							cy='221.267'
							r='6.335'
							fill='#0FB5FD'></circle>
					</svg>
					<svg
						className='absolute w-[50vw] top-full'
						ref={confettiRef}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						width='100%'
						height='100%'
						viewBox='0 0 449 478'>
						<circle
							cx='228.262'
							cy='120.123'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='45.612'
							cy='176.893'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='138.635'
							cy='88.449'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='132.3'
							cy='221.267'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='320.307'
							cy='56.281'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='144.97'
							cy='31.138'
							r='6.335'
							fill='#FD8002'></circle>
						<circle
							cx='228.262'
							cy='101.118'
							r='6.335'
							fill='#F02EC5'></circle>
						<circle
							cx='6.499'
							cy='113.277'
							r='6.335'
							fill='#F02EC5'></circle>
						<circle
							cx='199.692'
							cy='120.123'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='193.357'
							cy='252.941'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='176.387'
							cy='7.117'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='206.568'
							cy='88.449'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='405.563'
							cy='144.441'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='282.809'
							cy='82.114'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='344.876'
							cy='232.278'
							r='6.335'
							fill='red'></circle>
						<circle
							cx='257.81'
							cy='113.788'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='215.592'
							cy='350.767'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='110.495'
							cy='82.114'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='104.161'
							cy='214.932'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='351.211'
							cy='59.317'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='302.305'
							cy='18.469'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='441.73'
							cy='75.779'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='435.395'
							cy='208.597'
							r='6.335'
							fill='#FBE309'></circle>
						<circle
							cx='166.434'
							cy='94.784'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='344.876'
							cy='350.767'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='351.211'
							cy='113.788'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='257.81'
							cy='464.58'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='144.97'
							cy='59.317'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='177.788'
							cy='31.138'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='64.616'
							cy='119.612'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='32.942'
							cy='350.767'
							r='6.335'
							fill='#0F6'></circle>
						<circle
							cx='326.642'
							cy='84.601'
							r='6.335'
							fill='#7409FB'
							fillOpacity='0.94'></circle>
						<circle
							cx='405.563'
							cy='320.616'
							r='6.335'
							fill='#7409FB'
							fillOpacity='0.94'></circle>
						<circle
							cx='293.093'
							cy='106.943'
							r='6.335'
							fill='#7409FB'
							fillOpacity='0.94'></circle>
						<circle
							cx='144.97'
							cy='470.915'
							r='6.335'
							fill='#7409FB'
							fillOpacity='0.94'></circle>
						<circle
							cx='326.642'
							cy='24.803'
							r='6.335'
							fill='#7409FB'
							fillOpacity='0.94'></circle>
						<circle
							cx='251.475'
							cy='88.449'
							r='6.335'
							fill='#0FB5FD'></circle>
						<circle
							cx='245.141'
							cy='221.267'
							r='6.335'
							fill='#0FB5FD'></circle>
					</svg>
				</figure>
				<h1 className='w-full text-5xl text-center text-gray-500 md:text-right md:w-1/2 lg:w-1/2 lg:text-7xl'>
					james and tina's wedding
				</h1>
				<div className='w-2/3 text-center md:text-right'>
					<p className='text-2xl uppercase font-hatton'>
						<date>28 December 2021</date>
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
