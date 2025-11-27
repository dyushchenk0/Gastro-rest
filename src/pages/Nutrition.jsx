import React from 'react'
import Menu from '../components/Menu.jsx'
import NutritionBanner from '../components/NutritionBanner.jsx'
import NotificationIcon from '../assets/icons/nav/notification-bing.png'
import SearchIcon from '../assets/icons/nav/search.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Lunch1 from '../assets/images/slider/business_lunch/lunch_1.png'
import Lunch2 from '../assets/images/slider/business_lunch/lunch_2.png'
import '/src/scss/nutrition.scss'

const NutritionPage = () => {
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
						<a className='place__order'>Оформити замовлення</a>
					</div>
					<div className='business__lunch--block'>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch1} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>Бізнес-ланч «Рибний»</div>
								<div className='lunch__weight'>250 г</div>
								<div className='lunch__calories'>346 ккал</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									1. Курячий бульйон з локшиною і яйцем
								</div>
								<div className='lunch__text'>
									<span>2. Смажений рис з куркою</span>
								</div>
								<div className='lunch__text'>
									<span>3. Овочевий салат з базиліково-медовою заправкою</span>
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>1 порція \ 189 грн</p>
							</div>
						</div>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch2} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>Бізнес-ланч «М'ясний»</div>
								<div className='lunch__weight'>250 г</div>
								<div className='lunch__calories'>346 ккал</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									1. Курячий бульйон з локшиною і яйцем
								</div>
								<div className='lunch__text'>2. Смажений рис з куркою</div>
								<div className='lunch__text'>
									3. Овочевий салат з базиліково-медовою заправкою
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>1 порція \ 189 грн</p>
							</div>
						</div>
					</div>
					<div className='business__lunch--block'>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch1} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>Бізнес-ланч «Рибний»</div>
								<div className='lunch__weight'>250 г</div>
								<div className='lunch__calories'>346 ккал</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									1. Курячий бульйон з локшиною і яйцем
								</div>
								<div className='lunch__text'>
									<span>2. Смажений рис з куркою</span>
								</div>
								<div className='lunch__text'>
									<span>3. Овочевий салат з базиліково-медовою заправкою</span>
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>1 порція \ 189 грн</p>
							</div>
						</div>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch2} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>Бізнес-ланч «М'ясний»</div>
								<div className='lunch__weight'>250 г</div>
								<div className='lunch__calories'>346 ккал</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									1. Курячий бульйон з локшиною і яйцем
								</div>
								<div className='lunch__text'>2. Смажений рис з куркою</div>
								<div className='lunch__text'>
									3. Овочевий салат з базиліково-медовою заправкою
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>1 порція \ 189 грн</p>
							</div>
						</div>
					</div>
					<div className='business__lunch--block'>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch1} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>Бізнес-ланч «Рибний»</div>
								<div className='lunch__weight'>250 г</div>
								<div className='lunch__calories'>346 ккал</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									1. Курячий бульйон з локшиною і яйцем
								</div>
								<div className='lunch__text'>
									<span>2. Смажений рис з куркою</span>
								</div>
								<div className='lunch__text'>
									<span>3. Овочевий салат з базиліково-медовою заправкою</span>
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>1 порція \ 189 грн</p>
							</div>
						</div>
						<div className='lunch__item'>
							<div className='lunch__img'>
								<img src={Lunch2} alt='' />
							</div>
							<div className='lunch__title--block'>
								<div className='lunch__title'>Бізнес-ланч «М'ясний»</div>
								<div className='lunch__weight'>250 г</div>
								<div className='lunch__calories'>346 ккал</div>
							</div>
							<div className='lunch__text--block'>
								<div className='lunch__text'>
									1. Курячий бульйон з локшиною і яйцем
								</div>
								<div className='lunch__text'>2. Смажений рис з куркою</div>
								<div className='lunch__text'>
									3. Овочевий салат з базиліково-медовою заправкою
								</div>
							</div>
							<div className='lunch__count'>
								<a className='minus'>-</a>
								<p className='lunch__amount'>1</p>
								<a className='plus'>+</a>
								<p className='lunch__price'>1 порція \ 189 грн</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NutritionPage
