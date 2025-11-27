import db from '../db.js'

export const getTranslations = (req, res) => {
	const lang = req.query.lang === 'en' ? 'en' : 'ua'
	const q = 'SELECT `key`, ua, en FROM translations'

	db.query(q, (err, results) => {
		if (err) {
			console.error('Translations query error:', err)
			return res.status(500).json({ error: 'Database error' })
		}

		const out = {}
		results.forEach(row => {
			out[row.key] = row[lang] || row.ua || ''
		})

		res.json(out)
	})
}
