import React, { useState } from 'react'
import BaseModal from './BaseModal'

const ContactModal = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
	})

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log('Form data:', formData)
		onClose()
    setFormData({ name: '', phone: '' })
	}

	return (
		<BaseModal isOpen={isOpen} onClose={onClose} className='modal-contact'>
			<form onSubmit={handleSubmit} className='modal-form'>
				<h3 className='modal-title'>Незабаром ми зв'яжемося з вами!</h3>

				<div className='modal-inputs'>
					<input
						required
						placeholder="Ваше ім'я"
						name='name'
						type='text'
						className='modal-input'
						value={formData.name}
						onChange={handleInputChange}
					/>
					<input
						required
						placeholder='Ваш номер телефону'
						name='phone'
						type='tel'
						className='modal-input'
						value={formData.phone}
						onChange={handleInputChange}
					/>
				</div>

				<div className='modal-actions'>
					<button type='submit' className='btn btn-primary btn-full'>
						Передзвонити мені
					</button>
				</div>
			</form>
		</BaseModal>
	)
}

export default ContactModal
