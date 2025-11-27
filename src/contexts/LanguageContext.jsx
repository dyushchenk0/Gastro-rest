import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState('ua')
	const [translations, setTranslations] = useState({})

	useEffect(() => {
		fetch(`http://localhost:8800/api/translations?lang=${lang}`)
			.then(res => res.json())
			.then(data => setTranslations(data))
			.catch(err => console.error(err))
	}, [lang])

	const changeLanguage = newLang => {
		setLang(newLang)
	}

	return (
		<LanguageContext.Provider value={{ lang, changeLanguage, translations }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => useContext(LanguageContext)
export { LanguageContext }
