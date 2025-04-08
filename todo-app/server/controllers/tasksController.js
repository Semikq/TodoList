import {getTasks, getTasksDate, addTasks, deleteTasks, updateTasks} from "../models/tasksModel.js"

const getTasksController = (req, res) => {
    getTasks((err, tasks) =>{
        if(err) return res.status(500).json({ message: "Error" });
        res.status(200).json({ tasks });
    })
}

const getTasksDayController = (req, res) => {
    const { created_at } = req.body

    getTasksDate(created_at, (err, tasksDay) => {
        if (err) return res.status(500).json({ message: "Error" })
        res.status(200).json({ tasksDay })
    })
}

const getTasksAddController = (req, res) => {
    const { title, due_date } = req.body
    if(!title || !due_date) return res.status(400).json({ message: "Error" })

    addTasks({ title, due_date }, (err, results) => {
        if (err) return res.status(500).json({ message: "Error" })
        res.status(201).json({ message: "Successfully" })
    })
}

const getTasksRemoveController = (req, res) => {
    const { id } = req.body

    deleteTasks(id, (err, results) => {
        if (err) return res.status(500).json({ message: "Error" })
        res.status(200).json({ message: "Successfully" })
    })
}

const getTasksChangeController = (req, res) => {
    const { title, description, status, due_date, category_id, priority, id } = req.body

    updateTasks({ title, description, status, due_date, category_id, priority, id }, (err, results) => {
        if (err) return res.status(500).json({ message: "Error" })
        res.status(201).json({ message: "Successfully" })
    })
}
export default { getTasksController, getTasksDayController, getTasksAddController, getTasksRemoveController, getTasksChangeController }