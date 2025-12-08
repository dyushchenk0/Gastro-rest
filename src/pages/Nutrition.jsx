import React from 'react'
import Menu from '../components/Menu.jsx'
import NutritionBanner from '../components/NutritionBanner.jsx'
import NotificationIcon from '../assets/icons/nav/notification-bing.png'
import SearchIcon from '../assets/icons/nav/search.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import Lunch1 from '../assets/images/slider/business_lunch/lunch_1.png'
import Lunch2 from '../assets/images/slider/business_lunch/lunch_2.png'
import '/src/scss/nutrition.scss'

const NutritionPage = () => {
	const { translations } = useLanguage()

	useEffect(() => {
		document.body.classList.add('nutrition-page')

		return () => {
			document.body.classList.remove('nutrition-page')
		}
	}, [])

	return (
		<div className='nutrition nutrition-page'>
			<Menu />
			<div className='content'>
				<NutritionBanner />
				<div className='lunch__block'>
					<div className='order__btn--wrapper'>
						<a className='place__order'>
							{translations['lunch.orderButton'] || 'Оформити замовлення'}
						</a>
					</div>
					<div className='business__lunch--block'>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch1} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>
									{translations['lunch.itemFish'] || 'Бізнес-ланч «Рибний»'}
								</div>
								<div className='lunch__weight'>
									{translations['lunch.itemFishWeight'] || '250 г'}
								</div>
								<div className='lunch__calories'>
									{translations['lunch.itemFishKcal'] || '346 ккал'}
								</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									{translations['lunch.itemFishMeal1'] ||
										'1. Курячий бульйон з локшиною і яйцем'}
								</div>
								<div className='lunch__text'>
									<span>
										{translations['lunch.itemFishMeal2'] ||
											'2. Смажений рис з куркою'}
									</span>
								</div>
								<div className='lunch__text'>
									<span>
										{translations['lunch.itemFishMeal3'] ||
											'3. Овочевий салат з базиліково-медовою заправкою'}
									</span>
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>
									{translations['lunch.itemAmount'] || '1 порція  189 грн'}
								</p>
							</div>
						</div>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch2} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>
									{translations['lunch.itemMeat'] || "Бізнес-ланч «М'ясний»"}
								</div>
								<div className='lunch__weight'>
									{translations['lunch.itemMeatWeight'] || '250 г'}
								</div>
								<div className='lunch__calories'>
									{translations['lunch.itemMeatKcal'] || '346 ккал'}
								</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									{translations['lunch.itemMeatMeal1'] ||
										'1. Курячий бульйон з локшиною і яйцем'}
								</div>
								<div className='lunch__text'>
									{translations['lunch.itemMeatMeal2'] ||
										'2. Смажений рис з куркою'}
								</div>
								<div className='lunch__text'>
									{translations['lunch.itemMeatMeal3'] ||
										'3. Овочевий салат з базиліково-медовою заправкою'}
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>
									{translations['lunch.itemAmount'] || '1 порція  189 грн'}
								</p>
							</div>
						</div>
					</div>
					<div className='business__lunch--block'>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch1} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>
									{translations['lunch.itemFish'] || 'Бізнес-ланч «Рибний»'}
								</div>
								<div className='lunch__weight'>
									{translations['lunch.itemFishWeight'] || '250 г'}
								</div>
								<div className='lunch__calories'>
									{translations['lunch.itemFishKcal'] || '346 ккал'}
								</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									{translations['lunch.itemFishMeal1'] ||
										'1. Курячий бульйон з локшиною і яйцем'}
								</div>
								<div className='lunch__text'>
									<span>
										{translations['lunch.itemFishMeal2'] ||
											'2. Смажений рис з куркою'}
									</span>
								</div>
								<div className='lunch__text'>
									<span>
										{translations['lunch.itemFishMeal3'] ||
											'3. Овочевий салат з базиліково-медовою заправкою'}
									</span>
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>
									{translations['lunch.itemAmount'] || '1 порція  189 грн'}
								</p>
							</div>
						</div>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch2} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>
									{translations['lunch.itemMeat'] || "Бізнес-ланч «М'ясний»"}
								</div>
								<div className='lunch__weight'>
									{translations['lunch.itemMeatWeight'] || '250 г'}
								</div>
								<div className='lunch__calories'>
									{translations['lunch.itemMeatKcal'] || '346 ккал'}
								</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									{translations['lunch.itemMeatMeal1'] ||
										'1. Курячий бульйон з локшиною і яйцем'}
								</div>
								<div className='lunch__text'>
									{translations['lunch.itemMeatMeal2'] ||
										'2. Смажений рис з куркою'}
								</div>
								<div className='lunch__text'>
									{translations['lunch.itemMeatMeal3'] ||
										'3. Овочевий салат з базиліково-медовою заправкою'}
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>
									{translations['lunch.itemAmount'] || '1 порція  189 грн'}
								</p>
							</div>
						</div>
					</div>
					<div className='business__lunch--block'>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch1} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>
									{translations['lunch.itemFish'] || 'Бізнес-ланч «Рибний»'}
								</div>
								<div className='lunch__weight'>
									{translations['lunch.itemFishWeight'] || '250 г'}
								</div>
								<div className='lunch__calories'>
									{translations['lunch.itemFishKcal'] || '346 ккал'}
								</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									{translations['lunch.itemFishMeal1'] ||
										'1. Курячий бульйон з локшиною і яйцем'}
								</div>
								<div className='lunch__text'>
									<span>
										{translations['lunch.itemFishMeal2'] ||
											'2. Смажений рис з куркою'}
									</span>
								</div>
								<div className='lunch__text'>
									<span>
										{translations['lunch.itemFishMeal3'] ||
											'3. Овочевий салат з базиліково-медовою заправкою'}
									</span>
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>
									{translations['lunch.itemAmount'] || '1 порція  189 грн'}
								</p>
							</div>
						</div>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch2} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>
									{translations['lunch.itemMeat'] || "Бізнес-ланч «М'ясний»"}
								</div>
								<div className='lunch__weight'>
									{translations['lunch.itemMeatWeight'] || '250 г'}
								</div>
								<div className='lunch__calories'>
									{translations['lunch.itemMeatKcal'] || '346 ккал'}
								</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									{translations['lunch.itemMeatMeal1'] ||
										'1. Курячий бульйон з локшиною і яйцем'}
								</div>
								<div className='lunch__text'>
									{translations['lunch.itemMeatMeal2'] ||
										'2. Смажений рис з куркою'}
								</div>
								<div className='lunch__text'>
									{translations['lunch.itemMeatMeal3'] ||
										'3. Овочевий салат з базиліково-медовою заправкою'}
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>
									{translations['lunch.itemAmount'] || '1 порція  189 грн'}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NutritionPage
