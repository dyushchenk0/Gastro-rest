import React from 'react'
// import { useModal } from '../hooks/useModal'

const Footer = () => {
	const openModal = () => {
		console.log('Open modal')
	}
	const leftLinks = [
		'Програми харчування',
		'Про нас',
		'Бізнес-ланчі',
		'Gastro Shop',
		'Блог',
	]

	const rightLinks = ['Умови співпраці', 'FASQ']

	const socialIcons = [
		{ icon: 'fa-brands fa-instagram', name: 'Instagram' },
		{ icon: 'fa-brands fa-facebook', name: 'Facebook' },
		{ icon: 'fa-brands fa-viber', name: 'Viber' },
		{ icon: 'fa-brands fa-telegram', name: 'Telegram' },
	]

	return (
		<div className='footer'>
			<div className='container'>
				<div className='left__block'>
					{leftLinks.map((link, index) => (
						<div key={index} className='left__block--item'>
							<a href='#'>{link}</a>
						</div>
					))}
				</div>

				<div className='center__block'>
					<div className='gastro__logo'>
						<img
							src='src/assets/logo/gastro__logo--footer.png'
							alt='Gastro Chef'
						/>
					</div>
					<div className='gastro__logo--title'>сервіс здорового харчування</div>
				</div>

				<div className='right__block'>
					{rightLinks.map((link, index) => (
						<div key={index} className='right__block--item'>
							<a href='#'>{link}</a>
						</div>
					))}

					<div className='social__block'>
						{socialIcons.map((social, index) => (
							<div key={index} className='social__block--item'>
								<i className={social.icon}></i>
							</div>
						))}
					</div>

					<div className='right__block--item phone'>
						{/* Закомментировали вызов openModal */}
						<button onClick={openModal} className='phone-btn'>
							+38 (068) 949 - 49 - 19
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
