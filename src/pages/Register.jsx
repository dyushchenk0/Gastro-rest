import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'

const Register = () => {
	const { setCurrentUser } = useUser()
	const navigate = useNavigate()

	const [inputs, setInputs] = useState({
		username: '',
		email: '',
		password: '',
	})

	const [err, setError] = useState(null)

	const handleChange = e => {
		setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const res = await axios.post(
				'http://localhost:8800/api/auth/register',
				inputs,
				{
					withCredentials: true,
				}
			)
			console.log('Registration successful:', res.data)
			setCurrentUser(res.data.user)

			navigate(`/profile/${res.data.user.id}`)
		} catch (err) {
			console.log('Full error:', err)
			if (err.code === 'ERR_NETWORK') {
				setError(
					'Server is not running. Please start the backend server on port 8800.'
				)
			} else {
				setError(err.response?.data || 'Registration failed')
			}
		}
	}

	return (
		<div className='app'>
			<div className='dark__background'></div>

			<div className='app__container'>
				<div className='auth'>
					<h1>Register</h1>
					<form onSubmit={handleSubmit}>
						<div className='form__items'>
							<input
								required
								type='text'
								placeholder='Username'
								name='username'
								onChange={handleChange}
							/>
							<input
								required
								type='text'
								placeholder='Email'
								name='email'
								onChange={handleChange}
							/>
							<input
								required
								type='password'
								placeholder='Password'
								name='password'
								onChange={handleChange}
							/>
						</div>
						<div className='place__btn'>
							<button
								className='login__btn'
								type='submit'
							>
								Register
							</button>
						</div>
						{err && <p>{err}</p>}
						<span>
							Don't you have an account? <Link to='/login'>Login</Link>
						</span>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register
