import React, { useState } from 'react'
import { useModalPlaceOrder } from '../hooks/useModalPlaceOrder'

const Nutrition = () => {
	const { openOrderModal } = useModalPlaceOrder()
	const [activeDay, setActiveDay] = useState('пн')

	const nutritionPrograms = [
		{ name: 'Express Fit', calories: '800', active: false },
		{ name: 'Slim', calories: '100', active: false },
		{ name: 'Fitness', calories: '1300', active: true },
		{ name: 'Balance', calories: '1600', active: false },
		{ name: 'Balance+', calories: '1800', active: false },
		{ name: 'Strong', calories: '800', active: false },
		{ name: 'Maxi fit', calories: '2400', active: false },
	]

	const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд']

	const meals = [
		{
			time: 'Сніданок<br />7:00-9:00',
			name: '- Фріттата з сиром і кабачками',
			price: '170 грн',
		},
		{
			time: '2-й сніданок<br />10:00-12:00',
			name: '- Фермерский йогурт<br />- Корисне печиво з сухофруктів і горіхів',
			price: '200 грн<br />2 шт',
		},
		{
			time: 'Обід<br />13:00-15:00',
			name: '- Люля-кебаб з індички<br />- Літній салат з маслинами і сиром',
			price: '100 грн<br />100 грн',
		},
		{
			time: 'Полудень<br />16:00-17:30',
			name: '- Сирне суфле з какао і вишнею',
			price: '100 грн',
		},
		{
			time: 'Вечеря<br />19:00-20:00',
			name: '- Рибний терен<br />- Овочі гриль',
			price: '100 грн<br />150 грн',
		},
	]

	const prices = [
		{ days: 'Тестовий день', discount: '510 грн', current: '357 грн' },
		{ days: '1 день', discount: '-----', current: '510 грн' },
		{ days: 'від 7 днів', discount: '510 грн', current: '490 грн' },
		{ days: 'від 14 днів', discount: '510 грн', current: '470 грн' },
		{ days: 'від 30 днів', discount: '510 грн', current: '445 грн' },
		{ days: 'Завтрак и ужин', discount: '-15%', current: '433 грн' },
	]

	return (
		<div className='nutrition'>
			<div className='container'>
				<div className='nutrition__category'>
					<div className='nutrition__prog--title active'>
						Програми харчування
					</div>
					<div className='special__prog--title'>Спеціальні програми</div>
				</div>

				<div className='nutrition__variations'>
					{nutritionPrograms.map((program, index) => (
						<div key={index} className='category__item'>
							<div className='category__item--title'>
								<a
									href='#'
									className={`category__item--link ${
										program.active ? 'active' : ''
									}`}
								>
									{program.name}
								</a>
							</div>
							<div className='category__item--calories'>
								{program.calories} <span>ккал</span>
							</div>
						</div>
					))}
				</div>

				<div className='nutrition__content'>
					<div className='left__side'>
						<div className='nutrition__desc'>
							<div className='nutrition__header'>
								<div className='category__item--title white'>Fitness</div>
								<div className='category__item--calories white'>
									1300 <span>ккал</span>
								</div>
							</div>
							<div className='nutrition__desc--content'>
								Програма здорового харчування Express Fit. Ідеально підходить
								для: схуднення в найкоротші терміни, підвищення енергії та сил,
								зниження ваги при сидячому способі життя.
							</div>
						</div>

						<div className='nutrition__price'>
							{prices.map((price, index) => (
								<div key={index} className='nutrition__item'>
									<p className='days'>{price.days}</p>
									<p className='discount'>{price.discount}</p>
									<p className='current__price'>{price.current}</p>
								</div>
							))}
							<a onClick={openOrderModal} className='btn margin'>
								Замовити
							</a>
						</div>
					</div>

					<div className='right__side'>
						<div className='nutrition__days'>
							{days.map((day, index) => (
								<div
									key={index}
									className={`nutrition__days--item ${
										activeDay === day ? 'active' : ''
									}`}
									onClick={() => setActiveDay(day)}
								>
									<a href='#'>{day}</a>
								</div>
							))}
						</div>

						<div className='nutrition__meal--times'>
							{meals.map((meal, index) => (
								<div key={index} className='meal__times--item'>
									<div
										className='meal__time'
										dangerouslySetInnerHTML={{ __html: meal.time }}
									/>
									<div
										className='meal__name'
										dangerouslySetInnerHTML={{ __html: meal.name }}
									/>
									<div
										className='meal__price'
										dangerouslySetInnerHTML={{ __html: meal.price }}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='nutrition__circle'></div>
			</div>
		</div>
	)
}

export default Nutrition
