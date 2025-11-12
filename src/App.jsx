import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import Rules from './components/Rules.jsx'
import Nutrition from './components/Nutrition.jsx'
import RegisterQuestions from './components/RegisterQuestions.jsx'
import Footer from './components/Footer.jsx'
import { ModalProvider } from './components/ModalContext'


function App() {
	return (
		<div className='page'>
			<ModalProvider>
				<Header />
				<Intro />
				<Rules />
				<Nutrition />
				<RegisterQuestions />
				<Footer />
			</ModalProvider>
		</div>
	)
}

export default App
