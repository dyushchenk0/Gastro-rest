import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export const useModal = () => {
	const context = useContext(ModalContext)
	if (!context) {
		throw new Error('useModal must be used within a ModalProvider')
	}
	return context
}

export const ModalProvider = ({ children }) => {
	const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

	const openOrderModal = () => {
		console.log('Opening order modal...')
		setIsOrderModalOpen(true)
		document.body.style.overflow = 'hidden'
	}

	const closeOrderModal = () => {
		console.log('Closing order modal...')
		setIsOrderModalOpen(false)
		document.body.style.overflow = ''
	}

	const value = {
		isOrderModalOpen,
		openOrderModal,
		closeOrderModal,
	}

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
