import express from 'express'
import authRoutes from './routes/auth.js'
import dishRoutes from './routes/dishes.js'
import userRoutes from './routes/users.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import translationRoutes from './routes/translations.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
)

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes)
app.use('/api/dishes', dishRoutes)
app.use('/api/users', userRoutes)
app.use('/api/translations', translationRoutes)

const PORT = process.env.PORT || 8800
app.listen(PORT, () => {
	console.log(`API server running on port ${PORT}`)
})
