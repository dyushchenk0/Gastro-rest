import mysql from 'mysql2'

export const db = mysql.createPool({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || '2904',
	database: process.env.DB_NAME || 'gastro-chef',
	connectionLimit: 10,
})

db.query("SHOW TABLES LIKE 'users'", (err, results) => {
	if (err) {
		console.error('❌ Database connection failed:', err)
		console.log('Проверьте:')
		console.log('1. Запущен ли MySQL сервер')
		console.log('2. Правильность логина/пароля')
		console.log('3. Существует ли база данных gastro-chef')
	} else if (results.length === 0) {
		console.log('❌ Table "users" does not exist')
		console.log('Создайте таблицу командой:')
		console.log(`
			CREATE TABLE users (
				id INT AUTO_INCREMENT PRIMARY KEY,
				username VARCHAR(255) NOT NULL UNIQUE,
				email VARCHAR(255) NOT NULL UNIQUE,
				password VARCHAR(255) NOT NULL,
				language VARCHAR(10) DEFAULT 'en',
				created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
			)
		`)
	} else {
		console.log('✅ Table "users" exists')
	}
})

export default db
