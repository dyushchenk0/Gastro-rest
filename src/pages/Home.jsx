import React from 'react'
import Header from '../components/Header.jsx'
import Intro from '../components/Intro.jsx'
import Rules from '../components/Rules.jsx'
import Nutrition from '../components/Nutrition.jsx'
import RegisterQuestions from '../components/RegisterQuestions.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
	return (
		<>
			<Intro />
			<Rules />
			<Nutrition />
			<RegisterQuestions />
		</>
	)
}

export default Home
