import React, { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import '../scss/footer.scss'

const Footer = () => {
	const { translations } = useLanguage()

	useEffect(() => {
		document.body.classList.add('footer__block')
		return () => {
			document.body.classList.remove('footer__block')
		}
	}, [])

	const leftLinks = [
		translations['footer.leftItem1'],
		translations['footer.leftItem2'],
		translations['footer.leftItem3'],
		translations['footer.leftItem4'],
		translations['footer.leftItem5'],
	]

	const rightLinks = [
		translations['footer.rightItem2'],
		translations['footer.rightItem3'],
	]

	const socialIcons = [
		{ icon: 'fa-brands fa-instagram', name: 'Instagram' },
		{ icon: 'fa-brands fa-facebook', name: 'Facebook' },
		{ icon: 'fa-brands fa-viber', name: 'Viber' },
		{ icon: 'fa-brands fa-telegram', name: 'Telegram' },
	]

	return (
		<div className='footer'>
			<div className='container'>
				{/* LEFT BLOCK */}
				<div className='left__block'>
					{leftLinks.map((link, index) => (
						<div key={index} className='left__block--item'>
							<a href='#'>{link}</a>
						</div>
					))}
				</div>

				{/* CENTER BLOCK */}
				<div className='center__block'>
					<div className='gastro__logo'>
						<img
							src='src/assets/logo/gastro__logo--footer.png'
							alt='Gastro Chef'
						/>
					</div>

					<div className='gastro__logo--title'>
						{translations['footer.rightItem1']}
					</div>
				</div>

				{/* RIGHT BLOCK */}
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
						<button onClick={() => {}} className='phone-btn'>
							+38 (068) 949 - 49 - 19
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
