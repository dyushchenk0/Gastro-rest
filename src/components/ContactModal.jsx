import React from 'react'
import { useModal } from '../hooks/useModal'

const ContactModal = ({ closeModal, handleBackdropClick }) => {
	const { formData, handleInputChange, handleSubmit } = useModal()

	return (
		<div className='modal active' onClick={handleBackdropClick}>
			<div className='modal__dialog'>
				<div className='modal__content'>
					<form onSubmit={handleSubmit}>
						<div className='modal__close' onClick={closeModal}>
							&times;
						</div>

						<div className='modal__title'>Незабаром ми зв'яжемося з вами!</div>

						<div className='modal__input'>
							<input
								required
								placeholder="Ваше ім'я"
								name='name'
								type='text'
								className='modal__input--item'
								value={formData.name}
								onChange={handleInputChange}
							/>

							<input
								required
								placeholder='Ваш номер телефону'
								name='phone'
								type='tel'
								className='modal__input--item'
								value={formData.phone}
								onChange={handleInputChange}
							/>
						</div>

						<div className='contact__us'>
							<button type='submit' className='modal__btn btn__green btn__min'>
								Передзвонити мені
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactModal
