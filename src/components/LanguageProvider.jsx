import { createContext, useContext } from 'react'
import useTranslations from '../hooks/useTranslations'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
	const translationsData = useTranslations()
	return (
		<LanguageContext.Provider value={translationsData}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => useContext(LanguageContext)
