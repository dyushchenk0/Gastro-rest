import { useState, useEffect, useCallback } from 'react'

export const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
	})

	const disableScroll = useCallback(() => {
		document.body.style.overflow = 'hidden'
		document.documentElement.style.overflow = 'hidden'
	}, [])

	const enableScroll = useCallback(() => {
		document.body.style.overflow = ''
		document.documentElement.style.overflow = ''
	}, [])

	const resetModalForm = useCallback(() => {
		setFormData({
			name: '',
			phone: '',
		})
		console.log('Modal form reset')
	}, [])

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

	const closeModal = useCallback(() => {
		setIsModalOpen(false)
		enableScroll()
		resetModalForm()
		console.log('🔴 Modal closed')
	}, [enableScroll, resetModalForm])

	const handleInputChange = useCallback(e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}, [])

	// // Обработка отправки формы
	// const handleSubmit = useCallback(
	// 	e => {
	// 		e.preventDefault()
	// 		console.log('📝 Modal form submitted', formData)

	// 		// Здесь можно добавить отправку формы на сервер
	// 		// Например: axios.post('/api/contact', formData)

	// 		// Закрываем модальное окно после отправки
	// 		setTimeout(() => {
	// 			closeModal()
	// 		}, 500)
	// 	},
	// 	[formData, closeModal]
	// )

	const handleSubmit = async e => {
		e.preventDefault()

		const url = isLogin
			? 'http://localhost:8800/api/auth/login'
			: 'http://localhost:8800/api/auth/register'

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
				credentials: 'include',
			})

			const data = await response.json()

			if (response.ok) {
				setCurrentUser(data.user)
				closeModal()

				console.log('🔄 Redirecting to profile:', data.user.id)
				navigate(`/profile/${data.user.id}`)
			} else {
				alert(data.message || 'Something went wrong')
			}
		} catch (error) {
			console.error('Auth error:', error)
			alert('Network error')
		}
	}

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
