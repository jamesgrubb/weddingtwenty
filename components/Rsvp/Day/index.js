import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import useSWR from 'swr';
import { FiMail } from 'react-icons/fi';
import React from 'react';
import Title from '../../Svg/Title';
const validationSchema = object().shape({
	Starter: string().required(),
	Main: string().required(),
});

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Day(props) {
	const { register, handleSubmit, reset, formState } = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			Starter: '',
			Main: '',
			Diet: [],
		},
	});

	const { errors } = formState;
	const url = '/api/food';
	const onSubmit = (foodChoice) => {
		console.log(foodChoice);
		props.onGetMenuChoice(foodChoice);
	};

	const { data, error } = useSWR('/api/food', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	console.log(`data`, data);

	const starters = data.filter((item) => {
		return item.fields.Type === 'Starter';
	});
	const mains = data.filter((item) => {
		return item.fields.Type === 'Main';
	});
	const desert = data.filter((item) => {
		return item.fields.Type === 'Desert';
	});
	const youngDiner = data.filter((item) => {
		return item.fields.Type === 'YoungDiner';
	});
	const dietItems = data.filter((item) => {
		return item.fields.Type === 'Diet';
	});
	return (
		<>
			<div className='z-10 w-full transform translate-x-0'>
				<h3>
					<Title guest={props.guest} />
				</h3>
				<p className='w-full max-w-md mx-auto my-3 prose-lg text-center uppercase font-hatton sm:my-6 te'>
					We are so glad you can make it. Please choose a starter and
					main course.
				</p>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='z-10 flex-wrap justify-between h-full px-2 py-8 transform translate-x-0 bg-red-100 sm:flex sm:p-8 sm:px-8 sm:py-8'>
					<div className='flex-col justify-start block w-full space-y-3 prose-sm sm:space-y-5 sm:prose sm:items-start sm:w-3/5 '>
						<h3 className='tracking-widest text-center uppercase sm:text-left'>
							Starters
						</h3>
						{starters.map((item) => {
							return (
								<label
									key={item.id}
									htmlFor={item.id}
									className='inline-flex items-center flex-1 gap-3 space-x-2 text-left font-lora'>
									<input
										className='text-teal-600 form-radio'
										{...register(item.fields.Type)}
										type='radio'
										name={item.fields.Type}
										id={item.id}
										value={item.fields.Nickname}
									/>
									{item.fields.Dish}
								</label>
							);
						})}
						{errors.Starter ? (
							<strong className='flex-1 w-full font-mono text-sm font-light text-right text-red-400 peer'>
								Dont fancy anything {props.name}?
							</strong>
						) : (
							''
						)}
						<h3 className='tracking-widest text-center uppercase sm:text-left'>
							Mains
						</h3>
						{mains.map((item) => {
							return (
								<label
									className='inline-flex items-center gap-3 font-lora'
									key={item.id}
									htmlFor={item.id}>
									<input
										className='text-teal-600 form-radio'
										type='radio'
										{...register(item.fields.Type)}
										name={item.fields.Type}
										id={item.id}
										value={item.fields.Nickname}
									/>
									{item.fields.Dish}
								</label>
							);
						})}
						{errors.Main ? (
							<strong className='w-full font-mono text-sm font-light text-right text-red-400 felx-1 peer'>
								Dont fancy anything {props.name}?
							</strong>
						) : (
							''
						)}
						<h3 className='tracking-widest text-center uppercase sm:text-left'>
							Young Diner Menu
						</h3>
						<label
							className='inline-flex items-center gap-3 font-lora'
							key={youngDiner[0].id}
							htmlFor={youngDiner[0].id}>
							<input
								className='text-teal-600 form-radio'
								type='radio'
								{...register('Main')}
								name={'Main'}
								id={youngDiner[0].id}
								value={youngDiner[0].fields.Nickname}
							/>
							{youngDiner[0].fields.Dish}
						</label>

						{errors.Main ? (
							<strong className='w-full font-mono text-sm font-light text-right text-red-400 felx-1 peer'>
								Dont fancy anything {props.name}?
							</strong>
						) : (
							''
						)}
						<h3 className='tracking-widest text-center uppercase sm:text-left'>
							Desert
						</h3>
						<p className='pl-7 font-lora' key={desert[0].id}>
							{desert[0].fields.Dish}
						</p>
					</div>
					<div className='flex flex-col self-start w-full font-light prose-sm sm:w-1/5'>
						{dietItems.map((item) => {
							return (
								<label
									key={item.id}
									htmlFor={item.id}
									className='inline-flex items-baseline flex-1 gap-3 space-x-2 font-mono text-left'>
									<input
										className='text-teal-600 form-checkbox'
										{...register(item.fields.Type)}
										type='checkbox'
										name={item.fields.Type}
										id={item.id}
										value={item.fields.Name}
									/>
									{item.fields.Name}
								</label>
							);
						})}
					</div>
					<div className='flex w-full mt-4 space-x-2 sm:justify-start'>
						<button className='btn' type='submit'>
							<span>Yes Chef!</span>
							<FiMail />
						</button>
						<button
							className='btn secondary'
							type='button'
							onClick={() => reset()}>
							<span>Reset form</span>
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
