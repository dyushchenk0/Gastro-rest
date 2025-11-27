import express from 'express'
import db from '../db.js'

const router = express.Router()

router.get('/', (req, res) => {
	const lang = req.query.lang || 'ua'
	db.query('SELECT `key`, ua, en FROM translations', (err, results) => {
		if (err) return res.status(500).json({ error: err.message })

		const translations = {}
		results.forEach(row => {
			translations[row.key] = row[lang]
		})

		res.json(translations)
	})
})

export default router
