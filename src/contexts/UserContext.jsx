import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const res = await axios.get('http://localhost:8800/api/auth/verify', {
					withCredentials: true,
				})
				if (res.data.user) {
					setCurrentUser(res.data.user)
				}
			} catch (err) {
				setCurrentUser(null)
			}
		}
		checkAuth()
	}, [])

	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	)
}
