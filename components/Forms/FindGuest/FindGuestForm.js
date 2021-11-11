import { useState, useEffect } from 'react';
const FindGuestForm = (props) => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			name: name,
			surname: surname,
		};
		props.onHandleSubmit(formData);
		setName('');
		setSurname('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='flex flex-col w-1/2'>
				<label htmlFor='name' className='w-full'>
					name
				</label>
				<input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					type='text'
					name='name'
					id='name'
					className='w-full px-2 py-3 border focus:border-green-300'
				/>
			</div>
			<div className='flex flex-col w-1/2'>
				<label htmlFor='surname' className='w-full uppercase'>
					surname
				</label>
				<input
					value={surname}
					onChange={(e) => {
						setSurname(e.target.value);
					}}
					type='text'
					name='surname'
					id='surname'
					className='w-full px-2 py-3 border focus:border-green-300'
				/>
			</div>
			<button
				type='submit'
				className='px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500'>
				Button
			</button>
		</form>
	);
};

export { FindGuestForm };
