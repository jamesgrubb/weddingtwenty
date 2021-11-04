import { useForm } from 'react-hook-form';
import { FiMail } from 'react-icons/fi';
import Rsvp from '../../../Svg/rsvp';
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
			style={{
				backgroundImage:
					'url(https://res.cloudinary.com/makingthings/image/authenticated/s--foX__YiE--/v1635984948/wedding/RSVP.svg)',
			}}
			className='z-10 flex-col items-center justify-start block h-full px-1 py-8 space-y-8 overflow-y-hidden font-mono transform translate-x-0 bg-red-100 bg-center sm:flex sm:p-8 sm:items-start sm:px-8 sm:py-8'
			onSubmit={handleSubmit(onSubmit)}>
			<div className='relative flex flex-col items-center w-full'>
				<input
					id='email'
					name='email'
					type='text'
					className='input peer'
					placeholder='john@doe.com'
					{...register('Name')}
				/>
				<label htmlFor='Name' className='label'>
					name
				</label>
			</div>
			<div className='relative flex flex-col items-start w-full min-w-0'>
				<textarea
					placeholder='Whats the story?'
					className='input peer min-h-[120px]'
					{...register('Story', { required: true })}
				/>
				<label className='label' htmlFor='name'>
					your wise words please...
				</label>
				{errors.Story ? (
					<strong className='my-2 text-sm italic font-light text-red-400 peer'>
						Lost for words?
					</strong>
				) : (
					''
				)}
			</div>
			<button className='z-10 btn' type='submit'>
				<span>send my story</span> {<FiMail />}
			</button>
		</form>
	);
}

export default LoveStoriesForm;
