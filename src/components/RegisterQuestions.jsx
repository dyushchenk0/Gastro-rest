import React, { useState } from 'react'
import { useModalPlaceOrder } from '../hooks/useModalPlaceOrder'

const RegisterQuestions = () => {
	const { openOrderModal } = useModalPlaceOrder()
	const [formData, setFormData] = useState({
		fullname: '',
		phoneNumber: '',
		testDay: false,
		agreement: false,
	})

	const questions = [
		'Як здійснюється доставка правильного харчування?',
		'Чи можна змінювати час доставки\\місце?',
		'Як і в чому привозять їжу?',
		'Коли Ви готуєте?',
		'Какие продукты Вы используете?',
		'Я буду їсти одне й те саме?',
		'У мене алергія і непереносимість певних продуктів',
		'У якій черговості все є?',
		'Чи можна заморожувати програму?',
	]

	const handleInputChange = e => {
		const { name, value, type, checked } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	return (
		<div className='register__questions'>
			<div className='container'>
				<div className='reg__order'>
					<div className='content'>
						<div className='content__title'>Оформити замовлення</div>
						<div className='content__text'>
							Обговоріть всі деталі замовлення по телефону
							<br />
							або самі вкажіть всі подробиці онлайн
						</div>
					</div>

					<form className='modern__form'>
						<div className='input__field'>
							<input
								type='text'
								id='fullname'
								name='fullname'
								value={formData.fullname}
								onChange={handleInputChange}
								required
							/>
							<label htmlFor='fullname'>Имя</label>
						</div>

						<div className='input__field'>
							<input
								type='tel'
								id='phoneNumber'
								name='phoneNumber'
								value={formData.phoneNumber}
								onChange={handleInputChange}
								required
							/>
							<label htmlFor='phoneNumber'>Номер телефона</label>
						</div>

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
								<span>Тест-день! Получить скидку -30%?</span>
							</label>
						</div>

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
								<span>
									Согласен с
									<span className='green'> умовами сотрудничества</span>
								</span>
							</label>
						</div>
					</form>

					<div className='place__order'>
						<button className='submit__btn'>Замовити по телефону</button>
						<div className='order1__text'>или</div>
						<button onClick={openOrderModal} className='submit__btn'>
							Онлайн замовлення
						</button>
					</div>
				</div>

				<div className='questions'>
					<div className='content'>
						<div className='content__title'>Часто задавані питання</div>
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
