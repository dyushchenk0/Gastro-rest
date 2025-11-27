import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext.jsx'

const LangButtons = () => {
	const { lang, changeLanguage } = useContext(LanguageContext)

	return (
		<div className='nav__lang--wrapper'>
			<div className='change__lang'>
				<a
					className={`change__lang--item ${lang === 'ua' ? 'active' : ''}`}
					onClick={() => changeLanguage('ua')}
				>
					UA
				</a>

				<a
					className={`change__lang--item ${lang === 'en' ? 'active' : ''}`}
					onClick={() => changeLanguage('en')}
				>
					EN
				</a>
			</div>
		</div>
	)
}

export default LangButtons
