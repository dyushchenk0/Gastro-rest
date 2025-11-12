import { useState, useEffect } from 'react'

const useSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const images = [
		'/src/assets/images/slider/bottom_food/1.jpg',
		'/src/assets/images/slider/bottom_food/1.jpg',
		'/src/assets/images/slider/bottom_food/3.png',
		'/src/assets/images/slider/bottom_food/4.png',
		'/src/assets/images/slider/bottom_food/5.png',
		'/src/assets/images/slider/bottom_food/6.jpg',
	]

	const nextSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		)
	}

	const prevSlide = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		)
	}

	// Автопрокрутка
	useEffect(() => {
		const interval = setInterval(nextSlide, 3000)
		return () => clearInterval(interval)
	}, [])

	return {
		currentIndex,
		images,
		nextSlide,
		prevSlide,
	}
}

export default useSlider
