import { useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import FadeIn from '@/components/fadeIn/FadeIn'
import { IQuizInput } from '@/components/quiz/Quiz.types'

export default function Quiz() {
	const [currentStep, setCurrentStep] = useState(1)
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		reset,
		formState: { errors }
	} = useForm<IQuizInput>({
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
			age: '',
			location: '',
			howMutch: '',
			skill: '',
			type: '',
			ammunition: ''
		}
	})

	const modalRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		const savedFormData = localStorage.getItem('quizFormData')
		if (savedFormData) {
			const parsedData = JSON.parse(savedFormData)
			setValue('name', parsedData.name)
			setValue('email', parsedData.email)
			setValue('phone', parsedData.phone)
			setValue('message', parsedData.message)
			setValue('age', parsedData.age)
			setValue('location', parsedData.location)
			setValue('howMutch', parsedData.howMutch)
			setValue('skill', parsedData.skill)
			setValue('type', parsedData.type)
			setValue('ammunition', parsedData.ammunition)
			setValue('type', parsedData.type)
		}
	}, [setValue])

	const watchedFields = watch()
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			localStorage.setItem('quizFormData', JSON.stringify(watchedFields))
		}, 1000)

		return () => clearTimeout(timeoutId)
	}, [watchedFields])

	const onSubmit: SubmitHandler<IQuizInput> = async data => {
		const res = await fetch('/api/quiz', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})

		const result = await res.json()
		if (result.success) {
			showModal()
			localStorage.removeItem('quizFormData')
			reset() // Очистить форму после успешной отправки
		} else {
			alert('Failed to send message.')
		}
	}

	const showModal = () => {
		if (modalRef.current) {
			modalRef.current.showModal()
		}
	}

	const nextStep = () => {
		setCurrentStep(prevStep => prevStep + 1)
	}

	const prevStep = () => {
		setCurrentStep(prevStep => prevStep - 1)
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='w-full flex flex-col justify-center gap-6 min-h-64'
			>
				{currentStep === 1 && (
					<FadeIn>
						<div className='flex flex-col gap-4 mb-6'>
							<input
								type='text'
								id='name'
								{...register('name', { required: true })}
								placeholder='Имя'
								className='input input-bordered w-full'
							/>
							{errors.name && <span>This field is required</span>}
							<input
								type='email'
								id='email'
								{...register('email', { required: true })}
								placeholder='Почта'
								className='input input-bordered w-full'
							/>
							{errors.email && <span>This field is required</span>}
							<button
								type='button'
								onClick={nextStep}
								className='btn btn-wide btn-primary'
							>
								Далее
							</button>
						</div>
					</FadeIn>
				)}

				{currentStep === 2 && (
					<FadeIn>
						<div className='flex flex-col gap-4 mb-6'>
							<input
								type='tel'
								id='phone'
								{...register('phone', { required: true })}
								placeholder='Телефон'
								className='input input-bordered w-full'
							/>
							{errors.phone && <span>This field is required</span>}
							<textarea
								id='message'
								{...register('message')}
								placeholder='Сообщение'
								className='input input-bordered w-full p-3.5 h-24'
							></textarea>
							<div className='flex justify-between'>
								<button
									type='button'
									onClick={prevStep}
									className='btn btn-wide btn-secondary'
								>
									Назад
								</button>
								<button
									type='button'
									onClick={nextStep}
									className='btn btn-wide btn-primary'
								>
									Далее
								</button>
							</div>
						</div>
					</FadeIn>
				)}
				{currentStep === 3 && (
					<FadeIn>
						<div className='flex flex-col gap-4 mb-6'>
							<div className='form-control'>
								<label className='label cursor-pointer' htmlFor='skill'>
									<span className='label-text'>Начинающий</span>
									<input
										type='radio'
										{...register('skill')}
										id='skill-beginner'
										name='skill'
										value='Начинающий'
										className='radio checked:bg-red-500'
									/>
									<span className='label-text'>Опытный</span>
									<input
										type='radio'
										{...register('skill')}
										id='skill-intermediate'
										name='skill'
										value='Опытный'
										className='radio checked:bg-blue-500'
									/>
								</label>
							</div>
							<select className='select select-bordered w-full max-w-xs'>
								<option disabled selected>
									Локация
								</option>
								<option id='location' value='Москва' {...register('location')}>
									Москва
								</option>
								<option>Московская область</option>
							</select>
						</div>
						<div className='flex justify-between'>
							<button
								type='button'
								onClick={prevStep}
								className='btn btn-wide btn-secondary'
							>
								Назад
							</button>
							<button
								type='button'
								onClick={nextStep}
								className='btn btn-wide btn-primary'
							>
								Далее
							</button>
						</div>
					</FadeIn>
				)}
				{currentStep === 4 && (
					<FadeIn>
						<div className='flex flex-col gap-4 mb-6'>
							<div className='form-control'>
								<label htmlFor='age' className='block mb-2'>
									Возраст
								</label>
								<input
									type='number'
									name='age'
									id='age'
									aria-describedby='helper-text-explanation'
									className='input input-bordered rounded w-full'
									placeholder='30'
									required
								/>
							</div>
						</div>
						<div className='flex justify-between'>
							<button
								type='button'
								onClick={prevStep}
								className='btn btn-wide btn-secondary'
							>
								Назад
							</button>
							<button
								type='button'
								onClick={nextStep}
								className='btn btn-wide btn-primary'
							>
								Далее
							</button>
						</div>
					</FadeIn>
				)}
				{currentStep === 5 && (
					<FadeIn>
						<div className='flex justify-between'>
							<button
								type='button'
								onClick={prevStep}
								className='btn btn-wide btn-secondary'
							>
								Назад
							</button>
							<button type='submit' className='btn btn-wide btn-primary'>
								Отправить
							</button>
						</div>
					</FadeIn>
				)}
			</form>

			<dialog id='my_modal_1' ref={modalRef} className='modal'>
				<div className='modal-box'>
					<p className='py-4'>
						Ваше обращение отправлено! Спасибо за проявленный интерес!
					</p>
					<div className='modal-action'>
						<form method='dialog'>
							<button className='btn'>Закрыть</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	)
}
