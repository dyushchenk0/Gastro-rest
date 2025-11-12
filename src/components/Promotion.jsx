import React from 'react'
import { usePromotion } from '../hooks/usePromotion'

const Promotion = () => {
	const { days, hours, minutes, seconds } = usePromotion()

	return (
		<div className='promotion'>
			<div className='container'>
				<div className='prom__wrapper'>
					<div className='prom__content'>
						<div className='prom__title'>Акція для нових клієнтів!</div>
						<div className='prom__text'>
							Ми цінуємо кожного з клієнтів и пропонуємо вам стати одним із
							наших за дуже вигідними умовами. Кожному, хто замовить доставку за
							першу неділю, буде знижка в розмірі <span>20%</span>
						</div>
						<div className='prom__text--subtext'>
							Акція закінчиться 1 числа об 22 годині
						</div>
					</div>

					<div className='prom__timer'>
						<div className='timer__title'>Залишилося до кінця акції:</div>
						<div className='prom__timer--btns'>
							<div className='timer__item'>
								{days}
								<span className='days'>Дней</span>
							</div>
							<div className='timer__item'>
								{hours}
								<span className='hours'>Часов</span>
							</div>
							<div className='timer__item'>
								{minutes}
								<span className='minutes'>Минут</span>
							</div>
							<div className='timer__item'>
								{seconds}
								<span className='seconds'>Секунд</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Promotion
