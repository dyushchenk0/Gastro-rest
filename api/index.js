import express from 'express'
import authRoutes from "./routes/auth.js"
import dishRoutes from "./routes/dishes.js"
import userRoutes from "./routes/users.js"
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
)

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use('/api/dishes', dishRoutes)
app.use("/api/users", userRoutes)

app.get('/test', (req, res) => {
	res.json('It works')
})

app.listen(8800, () => {
	console.log("Connected!");
})