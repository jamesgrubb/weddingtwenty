import Title from '../../Svg/Title';

export default function Night(props) {
	return (
		<div className='z-10 w-full transform translate-x-0'>
			<h3>
				<Title guest={props.guest} />
			</h3>
			<p className='w-full max-w-md mx-auto my-3 prose-lg text-center uppercase font-hatton sm:my-6 te'>
				So glad you can make it. See you on the 28th at 19:30
			</p>
		</div>
	);
}
