import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProgramNutrition from './components/Nutrition.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'
import { ModalProvider } from './components/ModalContext'
import ProtectedRoute from './components/ProtectedRoute'
import { UserProvider } from './contexts/UserContext'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Nutrition from './pages/Nutrition.jsx'
import Order from './pages/Order.jsx'
import './scss/login.scss'

const PublicLayout = () => {
	return (
		<div className='page'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

const AuthLayout = () => {
	return (
		<div className='page'>
			<Outlet />
		</div>
	)
}

const ProfileLayout = () => {
	return (
		<div className='page'>
			<Header />
			<Outlet />
		</div>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <PublicLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'nutrition', element: <Nutrition /> },
			{ path: 'order', element: <Order /> },
		],
	},

	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{ path: 'register', element: <Register /> },
			{ path: 'login', element: <Login /> },
		],
	},

	{
		path: '/',
		element: <ProfileLayout />,
		children: [
			{
				element: <ProtectedRoute />,
				children: [{ path: 'profile/:id', element: <Profile /> }],
			},
		],
	},
])

function App() {
	return (
		<UserProvider>
			<ModalProvider>
				<LanguageProvider>
					<div className='app'>
						<div className='container'>
							<RouterProvider router={router} />
						</div>
					</div>
				</LanguageProvider>
			</ModalProvider>
		</UserProvider>
	)
}

export default App
