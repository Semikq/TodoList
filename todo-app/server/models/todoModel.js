import { pool } from "../pool.js"

const getUsers = (callback) => {
    pool.query("SELECT * FROM users", (err, results) =>{
        if(err) return callback (err, null)
        callback(null, results)
    })
}

const addUser = ({ nick, email, password }, callback) => {
    pool.query(
        "INSERT INTO users (nick, email, password) VALUES (?, ?, ?, ?, ?)", [nick, email, password],
        (err, results) => {
            if (err) return callback(err, null)
            callback(null, results)
        }
    )
}

const checkUser = ({ nick, email, password }, callback) => {
    pool.query(
        "SELECT * FROM users WHERE nick = ? AND email = ? AND password = ?", [nick, email, password],
        (err, results) => {
            if(err) return callback(err, null)
            callback(null, results)
        }
    )
}

const deleteUser = (email , callback) => {
    pool.query(
        "DELETE FROM users WHERE email = ?", [email],
        (err, results) => {
            if(err) return callback(err, null)
            callback(null, results)
        }
    )
}

const updateUser = ({ nick, name, surname, email }, callback) => {
    pool.query(
        "UPDATE users SET nick = ?, name = ?, surname = ? WHERE email = ?",
        [nick, name, surname, email],
        (err, results) => {
            if (err) return callback(err, null)
            callback(null, results)
        }
    )
}
export default {getUsers, addUser, checkUser, deleteUser, updateUser}