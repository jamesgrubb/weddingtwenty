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
			className='flex flex-col items-start w-full p-8 font-mono bg-teal-100'
			onSubmit={handleSubmit(onSubmit)}>
			<ul className='flex flex-wrap w-full space-y-8 sm:space-y-0 sm:space-x-4'>
				<li className='relative flex-grow w-100% flex flex-col items-center'>
					<input
						id='email'
						name='email'
						type='text'
						class='input peer'
						placeholder='john@doe.com'
						{...register('Name')}
					/>
					<label for='Name' class='label'>
						Name
					</label>
				</li>
				<li className='relative min-w-0 w-100% flex flex-col items-start'>
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
				</li>
			</ul>
			<button
				className='space-x-2 inline-flex mt-3 items-center px-3 pt-2 min-h-[44px] pb-2 text-teal-100 text-center bg-gray-700 shadow font-mono font-light hover:bg-gray-400'
				type='submit'>
				<span>send my story</span> {<FiMail />}
			</button>
		</form>
	);
}

export default LoveStoriesForm;
