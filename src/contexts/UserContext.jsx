import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(true)
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
				console.log('Auth check failed:', err.message)
				setCurrentUser(null)
			} finally {
				setLoading(false)
			}
		}
		checkAuth()
	}, [])

	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser, loading }}>
			{children}
		</UserContext.Provider>
	)
}
