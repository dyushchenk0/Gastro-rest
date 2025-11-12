import React from 'react'
import { useModalPlaceOrder } from '../hooks/useModalPlaceOrder'
import OrderModal from './OrderModal'

const Intro = () => {
	const { openOrderModal } = useModalPlaceOrder()

	const handleOrderClick = e => {
		e.preventDefault()
		openOrderModal(e)
	}

	return (
		<div className='intro'>
			<div className='intro__inner'>
				<div className='intro__menu'>
					<a className='menu__item'>Ккал</a>
					<a className='menu__item active'>
						<img src='src/assets/icons/nav/fish.png' alt='Fish' />
					</a>
					<a className='menu__item'>
						<img src='src/assets/icons/nav/carrot.png' alt='Carrot' />
					</a>
					<a className='menu__item'>
						<img src='src/assets/icons/nav/bottle.png' alt='Bottle' />
					</a>
					<a className='menu__item'>
						<img src='src/assets/icons/nav/meat.png' alt='Meat' />
					</a>
					<a className='menu__item'>
						<span>5</span>
						<img src='src/assets/icons/nav/table.png' alt='Table' />
					</a>
				</div>

				<div className='intro__content--container'>
					<div className='intro__content'>
						<div className='intro__text--block'>
							<div className='intro__title'>
								Detox програма – <br />
								смачне очищення організму
							</div>
							<div className='intro__subtitle'>
								8 пляшок <span>натуральних</span> смузі та фрешів.
							</div>
							<div className='intro__order'>
								<a className='btn' onClick={handleOrderClick}>
									Замовити
								</a>
								<div className='order__content'>
									<div className='order__text'>Пробний день всього:</div>
									<div className='order__price'>427 грн</div>
								</div>
							</div>
						</div>
					</div>
					<div className='intro__media--block'>
						<div className='intro__media'>
							<div className='image__circle'>
								<div className='intro__photo'>
									<img src='src/assets/images/slider/food/3.png' alt='Food' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Intro
