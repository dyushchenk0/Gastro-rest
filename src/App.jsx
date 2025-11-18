import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { ModalProvider } from './components/ModalContext'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Order from './pages/Order.jsx'
import './scss/login.scss'

// Базовый Layout для всех страниц
const Layout = () => {
	return (
		<ModalProvider>
			<div className='page'>
				<Outlet />
			</div>
		</ModalProvider>
	)
}

const HomeLayout = () => {
	return (
		<ModalProvider>
			<div className='page'>
				<Header />
				<Home />
				<Footer />
			</div>
		</ModalProvider>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
	},
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			// {
			// 	path: '/dish/:id',
			// 	element: <Single />,
			// },
			{
				path: '/order',
				element: <Order />,
			},
			{
				path: '/profile/:id',
				element: <Profile />,
			},
		],
	},
])

function App() {
	return (
		<div className='app'>
			<div className='container'>
				<RouterProvider router={router} />
			</div>
		</div>
	)
}

export default App
