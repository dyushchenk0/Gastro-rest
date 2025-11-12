import React from 'react'
import useSlider from '../hooks/useSlider'

const Slider = () => {
	const { currentIndex, images, nextSlide, prevSlide } = useSlider()

	return (
		<div className='slider-container'>
			<div className='slider'>
				<img
					src={images[currentIndex]}
					alt={`Slide ${currentIndex + 1}`}
					className='slide'
				/>
			</div>
			<button onClick={prevSlide}>Previous</button>
			<button onClick={nextSlide}>Next</button>
		</div>
	)
}

export default Slider
