import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
	const [inputs, setInputs] = useState({
		username: '',
		password: '',
	})

	const [err, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	const handleChange = e => {
		setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
		setError(null)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		setError(null)

		if (!inputs.username.trim() || !inputs.password.trim()) {
			setError('Please fill in all fields')
			setLoading(false)
			return
		}

		try {
			console.log('🔄 Sending login request...', inputs)

			const response = await axios.post(
				'http://localhost:8800/api/auth/login',
				inputs,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			console.log('✅ Login successful:', response.data)
			navigate('/')
		} catch (err) {
			console.error('❌ Login error:', err.response?.data || err.message)
			setError(err.response?.data || 'Login failed')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='app'>
			<div className='dark__background'></div>

			<div className='app__container'>
				<div className='auth'>
					<h1>Login</h1>
					<form onSubmit={handleSubmit}>
						<div className='form__items'>
							<input
								required
								type='text'
								placeholder='Username or Email'
								name='username'
								onChange={handleChange}
								value={inputs.username}
							/>
							<input
								required
								type='password'
								placeholder='Password'
								name='password'
								onChange={handleChange}
								value={inputs.password}
							/>
						</div>
						<div className='place__btn'>
							<button className='login__btn' type='submit' disabled={loading}>
								{loading ? 'Logging in...' : 'Login'}
							</button>
						</div>
						{err && <p style={{ color: 'red', textAlign: 'center' }}>{err}</p>}
						<span>
							Don't you have an account? <Link to='/register'>Register</Link>
						</span>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
