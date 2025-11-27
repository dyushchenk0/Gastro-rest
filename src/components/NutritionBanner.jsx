import React from 'react'
import '../scss/nutrition.scss'

import LunchBall1 from '../assets/images/slider/business_lunch/lunch_balls1.png'
import LunchBall2 from '../assets/images/slider/business_lunch/lunch_balls2.png'

const NutritionBanner = () => {
	return (
		<div className='business__lunch'>
			<div className='business__banner'>
				<div className='banner__images'>
					<img
						src={LunchBall1}
						alt='Business lunch'
						className='business__img'
					/>
					<img
						src={LunchBall2}
						alt='Business lunch'
						className='business__img'
					/>

					<div className='banner__text'>
						<div className='business__title'>Бізнес-ланчі</div>
						<div className='business__desc'>
							Представляем сладкую коллекцию полезных конфет. Созданы с любовью
							и изготовлены из натуральных продуктов без добавления сахара - с
							заботой о вас и ваших близких!
							<br />
							<br />
							Стоимость доставки 60 грн по предварительному заказу (за 1 сутки).
							Предварительный заказ предполагает доставку на следующий день с
							6:00-10:00. Минимальный заказ - от 6 конфет. Вес 1 кофетки 25 г.
							<br />
							<br />
							Заказы "на завтра" принимаются до 11-00 текущего дня.
							<br />
							<br />
							Конфеты доставляются в прозрачных пакетах со стикером. Вы можете
							заказать подарочный бокс с лентой стоимостью 20 грн
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NutritionBanner
