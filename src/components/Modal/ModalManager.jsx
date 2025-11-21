import React from 'react'
import { useModal } from '../../contexts/ModalContext'
import ContactModal from './ContactModal'
import OrderModal from './OrderModal'
import { useModal } from '../../hooks/useModal'

const ModalManager = () => {
	const { modals, closeModal } = useModal()

	return (
		<>
			<ContactModal
				isOpen={modals.contact}
				onClose={() => closeModal('contact')}
			/>
			<OrderModal isOpen={modals.order} onClose={() => closeModal('order')} />
		</>
	)
}

export default ModalManager
