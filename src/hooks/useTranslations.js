import { useState, useEffect } from 'react'

export default function useTranslations(initialLang = 'ua') {
	const [lang, setLang] = useState(initialLang)
	const [translations, setTranslations] = useState({})

	useEffect(() => {
		fetch(`http://localhost:8800/api/translations/${lang}`)
			.then(res => res.json())
			.then(data => setTranslations(data))
	}, [lang])

	const toggleLanguage = () => {
		setLang(lang === 'ua' ? 'en' : 'ua')
	}

	return { lang, translations, toggleLanguage }
}
