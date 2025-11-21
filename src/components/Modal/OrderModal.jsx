import React from 'react'
import BaseModal from './BaseModal'

const OrderModal = ({ isOpen, onClose, data }) => {
	return (
		<BaseModal
			isOpen={isOpen}
			onClose={onClose}
			className='modal-order modal-large'
		>
			<div className='modal-content'>
				<h3 className='modal-title modal-title-alert'>
					Заповніть форму для замовлення
				</h3>

				{/* Ваша форма заказа */}
				<div className='input-container'>{/* Поля формы */}</div>

				<div className='modal-actions'>
					<button className='btn btn-primary btn-full'>
						Оформити замовлення
					</button>
				</div>
			</div>
		</BaseModal>
	)
}

export default OrderModal
