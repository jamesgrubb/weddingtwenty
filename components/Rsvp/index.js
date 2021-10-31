import { useForm } from 'react-hook-form';

const Rsvp = (props, children) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div className='fixed bottom-0 left-0 z-10 flex items-center justify-center w-full h-16 space-x-4 text-center bg-red-800 sm:h-20'>
			<strong className='font-normal text-teal-300 font-lora'>
				{' '}
				<button type='button' className='btn'>
					RSVP
				</button>
			</strong>
			<form className='space-x-2' onSubmit={handleSubmit(onSubmit)}>
				<select
					className='h-[44px]'
					{...register('Select', { required: true })}>
					<option value='Accept'>Accept</option>
					<option value='Decline'>Decline</option>
				</select>

				<button className='btn' type='submit'>
					submit
				</button>
			</form>
		</div>
	);
};

export default Rsvp;
