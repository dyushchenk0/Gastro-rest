import { useState, useEffect, useCallback } from 'react'

export const useModalPlaceOrder = () => {
	const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		street: '',
		house: '',
		level: '',
		apartment: '',
		entrance: '',
		intercom: '',
		delivery_time: '',
		payment_method: '',
		source: '',
		contact_method: '',
		agree: false,
		test_day: false,
	})

	// Функции для управления скроллом
	const disableScroll = useCallback(() => {
		document.body.style.overflow = 'hidden'
		document.documentElement.style.overflow = 'hidden'
		document.body.style.paddingRight = '15px' // Компенсируем исчезновение скроллбара
	}, [])

	const enableScroll = useCallback(() => {
		document.body.style.overflow = ''
		document.documentElement.style.overflow = ''
		document.body.style.paddingRight = ''
	}, [])

	// Сброс формы
	const resetOrderForm = useCallback(() => {
		setFormData({
			name: '',
			phone: '',
			street: '',
			house: '',
			level: '',
			apartment: '',
			entrance: '',
			intercom: '',
			delivery_time: '',
			payment_method: '',
			source: '',
			contact_method: '',
			agree: false,
			test_day: false,
		})
		console.log('Order form reset')
	}, [])

	// Открытие модального окна заказа
	const openOrderModal = useCallback(
		e => {
			if (e) {
				e.preventDefault()
			}
			console.log('🟢 Order button clicked, opening modal...')
			setIsOrderModalOpen(true)
			disableScroll()
			console.log('✅ Order modal opened, main page scroll disabled')
		},
		[disableScroll]
	)

	// Закрытие модального окна заказа
	const closeOrderModal = useCallback(() => {
		setIsOrderModalOpen(false)
		enableScroll()
		resetOrderForm()
		console.log('🔴 Order modal closed, main page scroll enabled')
	}, [enableScroll, resetOrderForm])

	// Обработка изменений в форме
	const handleInputChange = useCallback(e => {
		const { name, value, type, checked } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}, [])

	// Обработка отправки формы
	const handleSubmit = useCallback(
		e => {
			e.preventDefault()
			console.log('📝 Order form submitted', formData)

			// Проверка согласия с условиями
			if (!formData.agree) {
				alert('Будь ласка, погодьтесь з умовами співпраці')
				return
			}

			// Здесь можно добавить отправку формы на сервер
			// Например: axios.post('/api/order', formData)

			// Закрываем модальное окно после отправки
			setTimeout(() => {
				closeOrderModal()
				alert("Дякуємо за замовлення! Ми зв'яжемося з вами найближчим часом.")
			}, 500)
		},
		[formData, closeOrderModal]
	)

	// Закрытие по ESC
	useEffect(() => {
		const handleEscKey = e => {
			if (e.key === 'Escape' && isOrderModalOpen) {
				closeOrderModal()
			}
		}

		document.addEventListener('keydown', handleEscKey)
		return () => {
			document.removeEventListener('keydown', handleEscKey)
		}
	}, [isOrderModalOpen, closeOrderModal])

	// Закрытие по клику на фон
	const handleBackdropClick = useCallback(
		e => {
			if (e.target === e.currentTarget) {
				closeOrderModal()
			}
		},
		[closeOrderModal]
	)

	return {
		isOrderModalOpen,
		openOrderModal,
		closeOrderModal,
		handleBackdropClick,
		formData,
		handleInputChange,
		handleSubmit,
	}
}
