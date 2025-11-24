import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'

const ProtectedRoute = () => {
	const { currentUser } = useUser()

	return currentUser ? <Outlet /> : <Navigate to='/register' />
}

export default ProtectedRoute
