import React, { useState } from 'react'
import { useModalPlaceOrder } from '../hooks/useModalPlaceOrder'
import { useLanguage } from '../contexts/LanguageContext.jsx'

import '../scss/nutrition.scss'

const Nutrition = () => {
	const { openOrderModal } = useModalPlaceOrder()
	const { translations } = useLanguage()
	const [activeDay, setActiveDay] = useState('mon')

	// Programs
	const nutritionPrograms = [
		{ name: 'Express Fit', calories: 800, active: false },
		{ name: 'Slim', calories: 1000, active: false },
		{ name: 'Fitness', calories: 1300, active: true },
		{ name: 'Balance', calories: 1600, active: false },
		{ name: 'Balance+', calories: 1800, active: false },
		{ name: 'Strong', calories: 800, active: false },
		{ name: 'Maxi fit', calories: 2400, active: false },
	]

	// Days
	const daysList = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

	// Menu
	const meals = [
		{
			time: `${translations['nutritions.breackfast']}<br />7:00-9:00`,
			name: translations['nutritions.breackfastDish'],
			price: '170 ' + translations['basic.currency'],
		},
		{
			time: `${translations['nutritions.lunch']}<br />10:00-12:00`,
			name: translations['nutritions.lunchDish'],
			price: '200 ' + translations['basic.currency'],
		},
		{
			time: `${translations['nutritions.afternoon']}<br />13:00-15:00`,
			name: translations['nutritions.afternoonDish'],
			price: '200 ' + translations['basic.currency'],
		},
		{
			time: `${translations['nutritions.afternoonSnack']}<br />16:00-17:30`,
			name: translations['nutritions.afternoonSnackDish'],
			price: '100 ' + translations['basic.currency'],
		},
		{
			time: `${translations['nutritions.supper']}<br />19:00-20:00`,
			name: translations['nutritions.supperDish'],
			price: '250 ' + translations['basic.currency'],
		},
	]

	// Prices
	const prices = [
		{
			days: translations['nutrition__price.test__day'] || 'Тестовий день',
			discount: translations['nutrition__price.discount.none'] || '510',
			current: translations['nutrition__price.current.test'] || '357',
		},
		{
			days: translations['nutrition__price.day1'] || '1 день',
			discount: translations['nutrition__price.discount.none'] || '-----',
			current: translations['nutrition__price.current.1'] || '510',
		},
		{
			days: translations['nutrition__price.day7'] || 'від 7 днів',
			discount: translations['nutrition__price.discount.7'] || '510',
			current: translations['nutrition__price.current.7'] || '490',
		},
		{
			days: translations['nutrition__price.day14'] || 'від 14 днів',
			discount: translations['nutrition__price.discount.14'] || '510',
			current: translations['nutrition__price.current.14'] || '470',
		},
		{
			days: translations['nutrition__price.day30'] || 'від 30 днів',
			discount: translations['nutrition__price.discount.30'] || '510',
			current: translations['nutrition__price.current.30'] || '445',
		},
		{
			days: translations['nutrition__price.dinner__supper'] || 'Сніданок і вечеря',
			discount: translations['nutrition__price.discount.dinner'] || '-15%',
			current: translations['nutrition__price.current.dinner'] || '433',
		},
	]

	return (
		<div className='nutrition'>
			<div className='container'>
				{/* Titles */}
				<div className='nutrition__category'>
					<div className='nutrition__prog--title active'>
						{translations['nutritions.title1']}
					</div>

					<div className='special__prog--title'>
						{translations['nutritions.title2']}
					</div>
				</div>

				{/* Programs */}
				<div className='nutrition__variations'>
					{nutritionPrograms.map((p, i) => (
						<div key={i} className='category__item'>
							<div className='category__item--title'>
								<a
									className={`category__item--link ${p.active ? 'active' : ''}`}
								>
									{p.name}
								</a>
							</div>
							<div className='category__item--calories'>
								{p.calories} <span>ккал</span>
							</div>
						</div>
					))}
				</div>

				{/* Fitness */}
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
								{translations['nutritions.fitness']}
							</div>
						</div>

						{/* Prices */}
						<div className='nutrition__price'>
							{prices.map((price, i) => (
								<div key={i} className='nutrition__item'>
									<p className='days'>{price.days}</p>
									<p className='discount'>{price.discount}</p>
									<p className='current__price'>
										{price.current} {translations['basic.currency']}
									</p>
								</div>
							))}

							<a onClick={openOrderModal} className='btn margin'>
								{translations['intro.orderButton']}
							</a>
						</div>
					</div>

					{/* Days */}
					<div className='right__side'>
						<div className='nutrition__days'>
							{daysList.map((d, i) => (
								<div
									key={i}
									className={`nutrition__days--item ${
										activeDay === d ? 'active' : ''
									}`}
									onClick={() => setActiveDay(d)}
								>
									<a>{translations[`nutritions.${d}`]}</a>
								</div>
							))}
						</div>

						{/* Dishes */}
						<div className='nutrition__meal--times'>
							{meals.map((meal, i) => (
								<div key={i} className='meal__times--item'>
									<div
										className='meal__time'
										dangerouslySetInnerHTML={{ __html: meal.time }}
									/>
									<div
										className='meal__name'
										dangerouslySetInnerHTML={{ __html: meal.name }}
									/>
									<div className='meal__price'>{meal.price}</div>
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
