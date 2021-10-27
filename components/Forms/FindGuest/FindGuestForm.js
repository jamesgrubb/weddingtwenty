import { useState, useEffect } from 'react';
const FindGuestForm = (props) => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');

	const handleSubmit = (e) => {
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
				class='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
				Button
			</button>
		</form>
	);
};

export { FindGuestForm };
