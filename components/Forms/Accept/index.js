import React from 'react';
import { FiMail } from 'react-icons/fi';
import useForm from 'react-hook-form';

export default function Accept() {
	const {
		register,
		handleSubmit,
		formState: { error },
	} = useForm();

	onSubmit = (data) => {
		console.log(`data`, data);
		console.log(`error`, error);
	};

	return (
		<form
			className='flex flex-col w-full'
			onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col w-full'>
				<label className='label' htmlFor='Name'>
					Name
				</label>
				<input {...register('Name')} type='text' />
			</div>
			<div className='flex flex-col w-full'>
				<label className='label' htmlFor='Name'>
					Surname
				</label>
				<input {...register('Surname')} type='text' />
			</div>
			<button className='btn' type='submit'>
				<span>send my story</span> {<FiMail />}
			</button>
		</form>
	);
}
