import React from 'react';
import { FiMail } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

export default function Accept(props) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const watchName = watch('Name');

	const onSubmit = (data) => {
		console.log(data);
		props.onGetSavedGuestDetails(data);
	};

	return (
		<form
			className='z-10 flex-col justify-start block h-full px-1 py-8 space-y-8 font-mono transform translate-x-0 bg-red-100 sm:flex sm:flex-col sm:p-8 sm:items-start sm:px-8 sm:py-8'
			onSubmit={handleSubmit(onSubmit)}>
			<div className='relative flex flex-wrap w-full max-w-md'>
				<input
					className='input peer'
					placeholder='Name'
					{...register('Name', { required: true })}
					type='text'
				/>
				<label className='label' htmlFor='Name'>
					Name
				</label>
				{errors.Name ? (
					<strong className='my-2 text-sm italic font-light text-red-400 peer'>
						Forget your own Name?
					</strong>
				) : (
					''
				)}
			</div>
			<div className='relative flex flex-col items-center w-full max-w-md'>
				<input
					className='input peer'
					placeholder='Surname'
					{...register('Surname', { required: true })}
					type='text'
				/>
				<label className='label' htmlFor='Name'>
					Surname
				</label>
				{errors.Surname ? (
					<strong className='my-2 text-sm italic font-light text-red-400 peer'>
						Forget your Surname?
					</strong>
				) : (
					''
				)}
			</div>
			{/* <div className='flex flex-wrap w-full space-x-3 last:text-black '>
				<label
					htmlFor='accept'
					className='inline-flex items-center gap-2 font-lora '>
					<input
						id='accept'
						className='text-teal-600 form-radio'
						{...register('Accept')}
						name='Accept'
						type='radio'
						value='Accept'
					/>
					Accept
				</label>
				<label
					className='inline-flex items-center flex-1 gap-2 space-x-2 text-left font-lora '
					htmlFor='decline'>
					<input
						className='text-teal-600 form-radio'
						id='decline'
						{...register('Decline')}
						name='Accept'
						type='radio'
						value='Decline'
					/>
					Decline
				</label>
				{errors.Accept ? (
					<strong className='w-full my-2 text-sm italic font-light text-red-400 text-mono peer'>
						{`Make your mind up ${watchName}?`}
					</strong>
				) : (
					''
				)}
			</div> */}
			<button className='btn' type='submit'>
				<span>Submit</span> {<FiMail />}
			</button>
		</form>
	);
}
