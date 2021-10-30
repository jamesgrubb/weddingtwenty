import LoveStoriesForm from '../LoveStoriesForm';
import Sketch from '../../../Sketch';
import colorTeal from '../../../../Styles/colors.module.scss';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

function LoveStories() {
	const saveLoveStoryHandler = async (savedLoveStory) => {
		const stories = {
			...savedLoveStory,
		};
		const response = await fetch('/api/loveStories', {
			method: 'PUT',
			body: JSON.stringify(stories),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(async (response) => {
			if (response.ok) {
				console.log('response ok');
			} else {
				console.error(response.status);
			}
		});
	};

	return (
		<>
			<Sketch x={50} y={50} background={colorTeal} />
			<div className='z-10 flex flex-wrap items-stretch w-full transform translate-x-0 bg-teal-800 border-b-2 border-teal-900'>
				<div className='relative flex flex-col items-center p-8 leading-relaxed bg-teal-400 bg-opacity-80 font-lora lg:w-1/2 '>
					<CloudinaryContext
						className='absolute top-0 transform -translate-y-1/2 border-4 border-teal-300 rounded-full'
						cloudName='makingthings'>
						<Image alt='Janey Briers' publicId='wedding/jane'>
							<Transformation
								radius='max'
								width='80'
								height='80'
								gravity='face'
								crop='thumb'
								alt='Jane'
							/>
						</Image>
					</CloudinaryContext>
					<p className='mt-4'>
						Hello there! My name is Janey Briers. I’m James and
						Tina’s wedding celebrant, and I need your help! Our
						bride and groom don’t want anything too traditional on
						their big day. They want to hear from YOU. They’re
						asking for your ‘Wise words of love’, or suggestions for
						a happy future. Funny or heartfelt; wise or whacky,
						James and Tina would love to hear what you have to say.
						Thank you, thank you, thank you for your thoughts, time
						and help. I look forward to reading them to you on the
						28th December. Janey x
					</p>
				</div>
				<div className='w-full bg-teal-200 lg:w-1/2 '>
					<LoveStoriesForm onGetLoveStory={saveLoveStoryHandler} />
				</div>
			</div>
		</>
	);
}

export default LoveStories;
