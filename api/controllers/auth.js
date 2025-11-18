import { db } from '../db.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = (req, res) => {
	console.log('📨 Registration request received:', req.body)

	if (!req.body) {
		return res.status(400).json('No request body')
	}

	const { username, email, password } = req.body

	if (!username || !email || !password) {
		return res.status(400).json('All fields are required')
	}

	const q = 'SELECT * FROM users WHERE email = ? OR username = ?'

	db.query(q, [email, username], (err, data) => {
		if (err) {
			console.error('❌ Database error:', err)
			return res.status(500).json('Database error: ' + err.message)
		}

		if (data.length) {
			console.log('❌ User already exists:', { email, username })
			return res.status(409).json('User already exists!')
		}

		const salt = bcrypt.genSaltSync(10)
		const hash = bcrypt.hashSync(password, salt)

		const q =
			'INSERT INTO users(`username`, `email`, `password`) VALUES (?, ?, ?)'
		const values = [username, email, hash]

		db.query(q, values, (err, data) => {
			if (err) {
				console.error('❌ Insert error:', err)
				return res.status(500).json('Database error: ' + err.message)
			}

			console.log('✅ User created successfully:', username)
			return res.status(200).json({
				message: 'User has been created successfully',
				user: { username, email },
			})
		})
	})
}

export const login = (req, res) => {
	console.log('📨 Login request received:', req.body)

	if (!req.body) {
		return res.status(400).json('No request body')
	}

	const { username, password } = req.body

	if (!username || !password) {
		return res.status(400).json('Username/Email and password are required')
	}

	console.log('🔍 Searching for user:', username)

	const q = 'SELECT * FROM users WHERE username = ? OR email = ?'

	db.query(q, [username, username], (err, data) => {
		if (err) {
			console.error('❌ Database query error:', err)
			return res.status(500).json('Database error: ' + err.message)
		}

		console.log('📊 Query result length:', data.length)

		if (data.length === 0) {
			console.log('❌ User not found:', username)
			return res.status(404).json('User not found')
		}

		const user = data[0]
		console.log('🔍 User found:', user.username)

		const isPasswordCorrect = bcrypt.compareSync(password, user.password)

		if (!isPasswordCorrect) {
			console.log('❌ Wrong password for user:', user.username)
			return res.status(400).json('Wrong username or password')
		}

		console.log('✅ Password correct, generating token...')

		const token = jwt.sign({ id: user.id }, 'jwtkey')

		const { password: _, ...userWithoutPassword } = user

		res
			.cookie('access_token', token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'lax',
			})
			.status(200)
			.json({
				message: 'Login successful',
				user: userWithoutPassword,
			})
	})
}

export const logout = (req, res) => {
	console.log('📨 Logout request received')
	res.clearCookie('access_token')
	res.status(200).json({ message: 'Logout successful' })
}
