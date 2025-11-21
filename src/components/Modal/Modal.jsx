import React from 'react'

const Modal = ({
	isOpen,
	onClose,
	children,
	className = '',
	closeOnOverlayClick = true,
}) => {
	const handleBackdropClick = e => {
		if (e.target === e.currentTarget && closeOnOverlayClick) {
			onClose()
		}
	}

	if (!isOpen) return null

	return (
		<div className={`modal active ${className}`} onClick={handleBackdropClick}>
			<div className='modal__dialog'>
				<div className='modal__content'>{children}</div>
			</div>
		</div>
	)
}

export default Modal
