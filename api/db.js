import mysql from 'mysql'

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"2904",
  database:"Gastro Chef"
})
