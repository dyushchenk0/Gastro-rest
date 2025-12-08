import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState('ua')
	const [translations, setTranslations] = useState({})

	const loadTranslations = async language => {
		try {
			const res = await axios.get(
				`http://localhost:8800/api/translations?lang=${language}`
			)
			setTranslations(res.data)
		} catch (error) {
			console.error('Translation load error:', error)
		}
	}

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		fetch(`http://localhost:8800/api/translations?lang=${lang}`)
			.then(res => res.json())
			.then(data => setTranslations(data))
			.finally(() => setLoading(false))
	}, [lang])

	if (loading) return null

	const changeLanguage = newLang => {
		setLang(newLang)
	}

	return (
		<LanguageContext.Provider value={{ lang, changeLanguage, translations }}>
			{!loading && children}
		</LanguageContext.Provider>
	)
}