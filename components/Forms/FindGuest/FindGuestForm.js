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
				<label htmlFor='name' className='w-full uppercase'>
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
			<button className='px2 py-3 min-h-[44px]' type='submit'>
				submit
			</button>
		</form>
	);
};

export { FindGuestForm };
