import { useForm } from 'react-hook-form';
import { FiMail } from 'react-icons/fi';
function LoveStoriesForm(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const fields = {
			Name: data.Name,
			Story: data.Story,
		};
		props.onGetLoveStory(fields);
	};

	return (
		<form
			className='flex flex-col items-start w-full p-8 space-y-8 font-mono bg-teal-100'
			onSubmit={handleSubmit(onSubmit)}>
			<div className='relative flex flex-col items-center flex-grow w-full'>
				<input
					id='email'
					name='email'
					type='text'
					className='input peer'
					placeholder='john@doe.com'
					{...register('Name')}
				/>
				<label htmlFor='Name' className='label'>
					Name
				</label>
			</div>
			<div className='relative flex flex-col items-start w-full min-w-0'>
				<textarea
					placeholder='Whats the story?'
					className='input peer'
					{...register('Story', { required: true })}
				/>
				<label className='label' htmlFor='name'>
					Name
				</label>
				{errors.Story ? (
					<strong className='my-2 text-sm italic font-light text-red-400 peer'>
						Lost for words?
					</strong>
				) : (
					''
				)}
			</div>
			<button
				className='space-x-2 inline-flex mt-3 items-center px-3 pt-2 min-h-[44px] pb-2 text-teal-100 text-center bg-gray-700 shadow font-mono font-light hover:bg-gray-400'
				type='submit'>
				<span>send my story</span> {<FiMail />}
			</button>
		</form>
	);
}

export default LoveStoriesForm;
