import { useForm } from 'react-hook-form';

function LoveStoriesForm(props) {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		const fields = {
			Name: data.Name,
			Story: data.Story,
		};
		props.onGetLoveStory(fields);
		console.log(fields);
	};

	return (
		<form
			className='flex flex-col w-full min-w-0 font-mono bg-teal-100 sm:w-1/2'
			onSubmit={handleSubmit(onSubmit)}>
			<ul className='flex flex-wrap space-y-2'>
				<li className='flex-grow w-100% flex flex-col items-center p-1'>
					<label htmlFor='name'>Name</label>
					<input
						className='w-full px-3 py-2 border-gray-300 shadow focus:border-gray-600 focus:outline-none focus:ring-1 '
						type='text'
						{...register('Name')}
					/>
				</li>
				<li className='min-w-0 flex-grow w-100% flex flex-col items-center p-1'>
					<label htmlFor='name'>Name</label>
					<input
						className='w-full px-3 py-2 border-gray-300 shadow focus:border-gray-600 focus:outline-none focus:ring-1'
						type='text'
						{...register('Story')}
					/>
				</li>
			</ul>
			<button
				className='px-3 py-2 text-teal-100 uppercase bg-gray-700 shadow font-hatton hover:bg-gray-400'
				type='submit'>
				send my story
			</button>
		</form>
	);
}

export default LoveStoriesForm;
