import React from 'react'
import { useLanguage } from '../contexts/LanguageContext.jsx'

const Rules = () => {
	const { translations } = useLanguage()

	return (
		<div className='rules'>
			<div className='container'>
				<div className='rules__rectangle'>
					<div className='rul'>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img src='src/assets/icons/work/eco.png' alt='Eco' />
							</div>
							<div className='rules__text'>{translations['rules.rule1']}</div>
						</div>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img src='src/assets/icons/work/food.png' alt='Food' />
							</div>
							<div className='rules__text'>{translations['rules.rule2']}</div>
						</div>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img src='src/assets/icons/work/time.png' alt='Time' />
							</div>
							<div className='rules__text'>{translations['rules.rule3']}</div>
						</div>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img src='src/assets/icons/work/night.png' alt='Night' />
							</div>
							<div className='rules__text'>{translations['rules.rule4']}</div>
						</div>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img src='src/assets/icons/work/delivery.png' alt='Delivery' />
							</div>
							<div className='rules__text'>{translations['rules.rule5']}</div>
						</div>
						<div className='rules__item'>
							<div className='rules__icon'>
								<img
									className='rules__img'
									src='src/assets/icons/work/clock.png'
									alt='Clock'
								/>
							</div>
							<div className='rules__text'>{translations['rules.rule6']}</div>
						</div>
					</div>
				</div>
				<div className='circle__rul'></div>
			</div>
		</div>
	)
}

export default Rules
