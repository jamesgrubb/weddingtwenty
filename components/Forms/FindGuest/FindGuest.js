import { toast } from 'react-toastify';
import { FindGuestForm } from './FindGuestForm';
import 'react-toastify/dist/ReactToastify.css';
const FindGuest = () => {
	const handleGuestData = async (guestData) => {
		const data = {
			...guestData,
		};

		try {
			const result = await toast.promise(
				fetch('/api/guest', {
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json',
					},
				})
					.then((response) => {
						console.log(response);
						if (response.ok) {
							return response.json();
						} else {
							throw new Error(
								'Something went wrong with the response'
							);
						}
					})
					.then((rawResponse) => {
						console.log('raw-responser', raw - response);
					})
					.catch((error) => {
						console.log('catch error', error);
					}),
				{
					pending: 'Promise is pending',
					success: 'Promise resolved 👌',
					error: 'Promise rejected 🤯',
				}
			);

			const guests = await result.json();
			console.log(
				'🚀 ~ file: FindGuest.js ~ line 18 ~ handleGuestData ~ guests',
				guests
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className='w-full'>
				<FindGuestForm onHandleSubmit={handleGuestData} />
			</div>
		</>
	);
};

export { FindGuest };
