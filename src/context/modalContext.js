import React, { createContext, useState, useCallback } from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
	const [modals, setModals] = useState({
		contact: false,
		order: false,
	})

	const [modalData, setModalData] = useState({})

	const openModal = useCallback((modalName, data = {}) => {
		setModals(prev => ({ ...prev, [modalName]: true }))
		setModalData(data)
		document.body.style.overflow = 'hidden'
	}, [])

	const closeModal = useCallback(modalName => {
		setModals(prev => ({ ...prev, [modalName]: false }))
		setModalData({})
		document.body.style.overflow = ''
	}, [])

	const closeAllModals = useCallback(() => {
		setModals({
			contact: false,
			order: false,
		})
		setModalData({})
		document.body.style.overflow = ''
	}, [])

	const value = {
		modals,
		modalData,
		openModal,
		closeModal,
		closeAllModals,
	}

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}
