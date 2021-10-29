import React from 'react';
import dynamic from 'next/dynamic';
import colorTeal from '../../Styles/colors.module.scss';
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
	ssr: false,
});
const SNOWFLAKES_PER_LAYER = 200;
const MAX_SIZE = 10;
const GRAVITY = 0.75;
const LAYER_COUNT = 5;

const WIND_SPEED = 1;
const WIND_CHANGE = 0.0025;

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
		p5.noStroke();
		for (let l = 0; l < LAYER_COUNT; l++) {
			SNOWFLAKES.push([]);
			for (let i = 0; i < SNOWFLAKES_PER_LAYER; i++) {
				SNOWFLAKES[l].push({
					x: p5.random(p5.width),
					y: p5.random(p5.height),
					mass: p5.random(0.75, 1.25),
					l: l + 1,
				});
			}
		}
	};

	const draw = (p5) => {
		// p5.background(colorTeal.colorTeal);
		// p5.ellipse(x, y, 70, 70);
		// x++;
		p5.background(colorTeal.colorTeal);
		for (let l = 0; l < SNOWFLAKES.length; l++) {
			const LAYER = SNOWFLAKES[l];

			for (let i = 0; i < LAYER.length; i++) {
				const snowflake = LAYER[i];
				p5.circle(
					snowflake.x,
					snowflake.y,
					(snowflake.l * MAX_SIZE) / LAYER_COUNT
				);
				updateSnowflake(snowflake);
			}
		}
	};

	function updateSnowflake(snowflake) {
		const diameter = (snowflake.l * MAX_SIZE) / LAYER_COUNT;
		if (snowflake.y > p5.height + diameter) snowflake.y = -diameter;
		else snowflake.y += GRAVITY * snowflake.l * snowflake.mass;
	}
	// const windowResized = () => {
	// 	resizeCanvas(window.innerWidth / 2, window.innerHeight / 2);
	// };
	// Will only render on client-side
	return <Sketch setup={setup} draw={draw} />;
};
