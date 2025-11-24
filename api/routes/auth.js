import express from 'express'
import { register, login, logout, verify } from '../controllers/auth.js'

const router = express.Router()

router.use((req, res, next) => {
	console.log('🔐 Auth Route:', req.method, req.url)
	console.log('📦 Body:', req.body)
	next()
})

router.post(
	'/register',
	(req, res, next) => {
		console.log('🛣️  /register route handler called')
		next()
	},
	register
)

router.post(
	'/login',
	(req, res, next) => {
		console.log('🛣️  /login route handler called')
		next()
	},
	login
)

router.post(
	'/logout',
	(req, res, next) => {
		console.log('🛣️  /logout route handler called')
		next()
	},
	logout
)

router.get(
	'/verify',
	(req, res, next) => {
		console.log('🛣️  /verify route handler called')
		next()
	},
	verify
)

export default router
