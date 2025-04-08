import { pool } from "../pool.js"

const getTasks = (callback) => {
    pool.query("SELECT * FROM tasks", (err, result) =>{
        if(err) return callback(err, null)
        callback(null, result)
    })
}

const getTasksDate = (created_at, callback) => {
    pool.query("SELECT * FROM tasks WHERE DATE(created_at) = ?", [created_at], (err, result) => {
        if(err) return callback(err, null)
            callback(null, result)
    })
}

const addTasks = ({title, due_date}, callback) => {
    pool.query("INSERT INTO tasks (title, due_date) VALUES (?, ?)", [title, due_date], (err, result) => {
        if(err) return callback(err, null)
        callback(null, result)
    })
}

const deleteTasks = (id, callback) => {
    pool.query("DELETE FROM tasks WHERE id = ?", [id], (err, result) => {
        if(err) return callback(err, null)
        callback(null, result)
    })
}

const updateTasks = ({title, description, status, due_date, category_id, priority, id}, callback) => {
    pool.query("UPDATE tasks SET title = ?, description = ?, status = ?, due_date = ?, category_id = ?, priority = ? WHERE id = ?", [title, description, status, due_date, category_id, priority, id], (err, result) => {
        if(err) return callback(err, null)
        callback(null, result)
    })
}
export default {getTasks, getTasksDate, addTasks, deleteTasks, updateTasks}