import React from 'react'

const Rules = () => {
	return (
		<div className='rules'>
			<div className='container'>
				<div className='rules__rectangle'>
					<div className='rul'>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img src='src/assets/icons/work/eco.png' alt='Eco' />
							</div>
							<div className='rules__text'>
								Бережемо природу.
								<br />
								Еко-тара та прилади.
							</div>
						</div>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img src='src/assets/icons/work/food.png' alt='Food' />
							</div>
							<div className='rules__text'>
								28 днів без повторень,
								<br />
								понад 300 страв!
							</div>
						</div>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img src='src/assets/icons/work/time.png' alt='Time' />
							</div>
							<div className='rules__text'>
								Безкоштовно замінюємо
								<br />
								страви та інгредієнти.
							</div>
						</div>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img src='src/assets/icons/work/night.png' alt='Night' />
							</div>
							<div className='rules__text'>
								Готуємо вночі, пакуємо
								<br />і відправляємо Вам!
							</div>
						</div>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img
									src='src/assets/icons/work/delivery.png'
									alt='Delivery'
								/>
							</div>
							<div className='rules__text'>
								Щоденна зручна
								<br />
								та безкоштовна доставка
								<br />з 6:00 до 10:00
							</div>
						</div>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img
									className='rules__img'
									src='src/assets/icons/work/clock.png'
									alt='Clock'
								/>
							</div>
							<div className='rules__text'>
								Сохраняем Вашу энергию
								<br />и до 14 часов в неделю
								<br />
								освобождая от готовки!
							</div>
						</div>
					</div>
				</div>
				<div className='circle__rul'></div>
			</div>
		</div>
	)
}

export default Rules
