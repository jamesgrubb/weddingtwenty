import React from 'react';
import dynamic from 'next/dynamic';
import colorTeal from '../../Styles/colors.module.scss';
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
	ssr: false,
});
const SNOWFLAKE_COUNT = 500;
const SIZE = 10;
const GRAVITY = 1;

const SNOWFLAKES = [];

export default (props) => {
	colorTeal;
	console.log('🚀 ~ file: index.js ~ line 10 ~ colorTeal', colorTeal);
	const x = props.x;
	const y = props.y;
	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(
			canvasParentRef
		);
	};

	const draw = (p5) => {
		p5.background(colorTeal.colorTeal);
		p5.ellipse(x, y, 70, 70);
		x++;
	};
	// const windowResized = () => {
	// 	resizeCanvas(window.innerWidth / 2, window.innerHeight / 2);
	// };
	// Will only render on client-side
	return <Sketch setup={setup} draw={draw} />;
};
