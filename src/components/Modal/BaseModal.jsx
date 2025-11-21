import React from 'react'

const BaseModal = ({
	isOpen,
	onClose,
	children,
	className = '',
	overlayClassName = '',
	closeOnOverlayClick = true,
}) => {
	const handleOverlayClick = e => {
		if (e.target === e.currentTarget && closeOnOverlayClick) {
			onClose()
		}
	}

	if (!isOpen) return null

	return (
		<div
			className={`modal-overlay ${overlayClassName}`}
			onClick={handleOverlayClick}
		>
			<div className={`modal ${className}`}>
				<button
					className='modal-close'
					onClick={onClose}
					aria-label='Close modal'
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	)
}

export default BaseModal
