import { useState, useEffect, useCallback } from 'react'

export const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
	})

	// Функции для управления скроллом
	const disableScroll = useCallback(() => {
		document.body.style.overflow = 'hidden'
		document.documentElement.style.overflow = 'hidden'
	}, [])

	const enableScroll = useCallback(() => {
		document.body.style.overflow = ''
		document.documentElement.style.overflow = ''
	}, [])

	// Сброс формы
	const resetModalForm = useCallback(() => {
		setFormData({
			name: '',
			phone: '',
		})
		console.log('Modal form reset')
	}, [])

	// Открытие модального окна
	const openModal = useCallback(
		e => {
			if (e) {
				e.preventDefault()
			}
			console.log('🟢 Modal button clicked, opening modal...')
			setIsModalOpen(true)
			disableScroll()
		},
		[disableScroll]
	)

	// Закрытие модального окна
	const closeModal = useCallback(() => {
		setIsModalOpen(false)
		enableScroll()
		resetModalForm()
		console.log('🔴 Modal closed')
	}, [enableScroll, resetModalForm])

	// Обработка изменений в форме
	const handleInputChange = useCallback(e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}, [])

	// Обработка отправки формы
	const handleSubmit = useCallback(
		e => {
			e.preventDefault()
			console.log('📝 Modal form submitted', formData)

			// Здесь можно добавить отправку формы на сервер
			// Например: axios.post('/api/contact', formData)

			// Закрываем модальное окно после отправки
			setTimeout(() => {
				closeModal()
			}, 500)
		},
		[formData, closeModal]
	)

	// Закрытие по ESC
	useEffect(() => {
		const handleEscKey = e => {
			if (e.key === 'Escape' && isModalOpen) {
				closeModal()
			}
		}

		document.addEventListener('keydown', handleEscKey)
		return () => {
			document.removeEventListener('keydown', handleEscKey)
		}
	}, [isModalOpen, closeModal])

	// Закрытие по клику на фон
	const handleBackdropClick = useCallback(
		e => {
			if (e.target === e.currentTarget) {
				closeModal()
			}
		},
		[closeModal]
	)

	return {
		isModalOpen,
		openModal,
		closeModal,
		handleBackdropClick,
		formData,
		handleInputChange,
		handleSubmit,
	}
}
