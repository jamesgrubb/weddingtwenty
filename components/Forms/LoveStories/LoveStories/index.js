import LoveStoriesForm from '../LoveStoriesForm';
import Sketch from '../../../Sketch';
import colorTeal from '../../../../Styles/colors.module.scss';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import { toast } from 'react-toastify';

function LoveStories() {
	const saveLoveStoryHandler = async (savedLoveStory) => {
		const stories = {
			...savedLoveStory,
		};

		// const responsb = await toast.promise(fetch('A_URL'), {
		// 	pending: 'Promise is pending',
		// 	success: 'Promise resolved 👌',
		// 	error: 'Promise rejected 🤯',
		// });
		// console.log(responsb);

		const response = await fetch('/api/loveStories', {
			method: 'PUT',
			body: JSON.stringify(stories),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(async (response) => {
			if (response.ok) {
				toast.dismiss();
				toast.success('Message received');
				console.log('response ok');
			} else {
				toast.dismiss();
				toast.error('UhOh');
				console.error(response.status);
			}
		});
	};

	return (
		<>
			<Sketch x={50} y={50} background={colorTeal} />
			<div className='z-10 flex-wrap items-stretch block w-full transform translate-x-0 bg-teal-800 border-b-2 border-teal-900 sm:flex'>
				<div className='relative flex flex-col items-center p-2 leading-relaxed bg-teal-400 text-teal-50 sm:p-8 bg-opacity-80 font-lora lg:w-1/2'>
					<CloudinaryContext
						className='mt-6 transform border-teal-300 rounded-full border-6'
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
					<p className='mt-10'>
						Hello there! My name is Janey Briers. I’m James and
						Tina’s wedding celebrant, and I need your help! Our
						bride and groom don’t want anything too traditional on
						their big day. They want to hear from YOU. They’re
						asking for your ‘Wise words of love’, or suggestions for
						a happy future. Funny or heartfelt; wise or whacky,
						James and Tina would love to hear what you have to say.
						Thank you, thank you, thank you for your thoughts, time
						and help. I look forward to reading them to you on the
						28th December. Janey x{' '}
					</p>
					<p className='ml-auto font-mono text-sm italic text-right'>
						Please send your wise words as soon as you can.
					</p>
				</div>
				<div className='relative w-full bg-teal-200 lg:w-1/2'>
					<LoveStoriesForm onGetLoveStory={saveLoveStoryHandler} />
				</div>
			</div>
		</>
	);
}

export default LoveStories;
