import React, { useState } from 'react'
import { useModalPlaceOrder } from '../hooks/useModalPlaceOrder'
import { useLanguage } from '../contexts/LanguageContext'

const RegisterQuestions = () => {
	const { openOrderModal } = useModalPlaceOrder()
	const { translations } = useLanguage()

	const [formData, setFormData] = useState({
		fullname: '',
		phoneNumber: '',
		testDay: false,
		agreement: false,
	})

	const handleInputChange = e => {
		const { name, value, type, checked } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	const questions = [
		translations['questions.item1'],
		translations['questions.item2'],
		translations['questions.item3'],
		translations['questions.item4'],
		translations['questions.item5'],
		translations['questions.item6'],
		translations['questions.item7'],
		translations['questions.item8'],
		translations['questions.item9'],
	]

	return (
		<div className='register__questions'>
			<div className='container'>
				<div className='reg__order'>
					<div className='content'>
						<div className='content__title'>
							{translations['place__order.title']}
						</div>

						<div className='content__text'>
							{translations['place__order.desc']}
						</div>
					</div>

					<form className='modern__form'>
						{/* FULLNAME */}
						<div className='input__field'>
							<input
								type='text'
								id='fullname'
								name='fullname'
								value={formData.fullname}
								onChange={handleInputChange}
								required
							/>
							<label htmlFor='fullname'>{translations['input.name']}</label>
						</div>

						{/* PHONE */}
						<div className='input__field'>
							<input
								type='tel'
								id='phoneNumber'
								name='phoneNumber'
								value={formData.phoneNumber}
								onChange={handleInputChange}
								required
							/>
							<label htmlFor='phoneNumber'>
								{translations['input.phoneNumber']}
							</label>
						</div>

						{/* TEST DAY */}
						<div className='radio__item'>
							<input
								type='checkbox'
								id='radioOption1'
								name='testDay'
								checked={formData.testDay}
								onChange={handleInputChange}
							/>
							<label htmlFor='radioOption1' className='radio__label'>
								<div className='custom__radio'></div>
								<span>{translations['radioBtn.testDay']}</span>
							</label>
						</div>

						{/* AGREEMENT */}
						<div className='radio__item'>
							<input
								type='checkbox'
								id='radioOption2'
								name='agreement'
								checked={formData.agreement}
								onChange={handleInputChange}
							/>
							<label htmlFor='radioOption2' className='radio__label'>
								<div className='custom__radio'></div>
								<span>{translations['radioBtn.agreeWithTerms']}</span>
							</label>
						</div>
					</form>

					<div className='place__order'>
						<button className='submit__btn'>
							{translations['questions.placeOrderBtn']}
						</button>

						<div className='order1__text'>{translations['questions.or']}</div>

						<button onClick={openOrderModal} className='submit__btn'>
							{translations['questions.placeOrderBtn2']}
						</button>
					</div>
				</div>

				{/* QUESTIONS SECTION */}
				<div className='questions'>
					<div className='content'>
						<div className='content__title'>
							{translations['questions.title']}
						</div>

						{questions.map((question, index) => (
							<div key={index} className='content__item'>
								{question}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterQuestions
