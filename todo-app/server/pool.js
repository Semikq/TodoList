import mysql from "mysql2"

export const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "TodoList"
})