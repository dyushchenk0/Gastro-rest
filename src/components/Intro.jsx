import React from 'react'
import { useModalPlaceOrder } from '../hooks/useModalPlaceOrder'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import Menu from './Menu.jsx'
import OrderModal from './OrderModal'

import '../index.css'

const Intro = () => {
	const { openOrderModal } = useModalPlaceOrder()
	const { translations } = useLanguage()

	const handleOrderClick = e => {
		e.preventDefault()
		openOrderModal(e)
	}

	return (
		<div className='intro'>
			<div className='intro__inner'>
				<Menu />

				<div className='intro__content--container'>
					<div className='intro__content'>
						<div className='intro__text--block'>
							<div
								className='intro__title'
								dangerouslySetInnerHTML={{
									__html: translations['intro.title'],
								}}
							/>
							<div
								className='intro__subtitle'
								dangerouslySetInnerHTML={{
									__html: translations['intro.subtitle'],
								}}
							/>
							<div className='intro__order'>
								<a className='btn' onClick={handleOrderClick}>
									{translations['intro.orderButton'] || 'Замовити'}
								</a>
								<div className='order__content'>
									<div className='order__text'>
										{translations['intro.trialPrice'] || 'Пробний день всього:'}
									</div>
									<div className='order__price'>
										{translations['intro.trialPrice2'] || '427 UAH'}
									</div>
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
