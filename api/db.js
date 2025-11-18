import mysql from 'mysql2'

export const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '2904',
	database: 'gastro-chef',
})

db.connect(err => {
	if (err) {
		console.error('❌ Database connection failed:', err)
		console.log('Проверьте:')
		console.log('1. Запущен ли MySQL сервер')
		console.log('2. Правильность логина/пароля')
		console.log('3. Существует ли база данных gastro_rest')
	} else {
		console.log('✅ Connected to MySQL database successfully')

		db.query("SHOW TABLES LIKE 'users'", (err, results) => {
			if (err) {
				console.error('Error checking tables:', err)
			} else if (results.length === 0) {
				console.log('❌ Table "users" does not exist')
				console.log('Создайте таблицу командой:')
				console.log(`
                    CREATE TABLE users (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        username VARCHAR(255) NOT NULL UNIQUE,
                        email VARCHAR(255) NOT NULL UNIQUE,
                        password VARCHAR(255) NOT NULL,
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )
                `)
			} else {
				console.log('✅ Table "users" exists')
			}
		})
	}
})
