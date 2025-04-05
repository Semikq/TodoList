import { getUsers, addUser, checkUser, deleteUser, updateUser } from "../models/todoModel.js"

const getUsersController = (req, res) => {
    getUsers((err, users) =>{
        if(err) return res.status(500).json({ message: "Error" });
        res.status(200).json({ users });
    })
}

const registerUser = ({ nick, email, password }, res) => {
    const { nick, email, password } = req.body
    if(!nick || !email || !password) return res.status(400).json({ message: "Error" })

    addUser({ nick, email, password }, (err, results) => {
        if (err) return res.status(500).json({ message: "Error" })
        res.status(201).json({ message: "Successfully" })
    })
}

const loginUser = (req, res) => {
    const { nick, email, password } = req.body
    if(!nick || !email || !password) return res.status(400).json({ message: "Error" })

    checkUser({ nick, email, password }, (err, results) => {
        if (err) return res.status(500).json({ message: "Error" })
        res.status(201).json({ message: "Successfully" })
    })
}

const removeUser = (req, res) => {
    const { email } = req.body

    deleteUser(email, (err, results) => {
        if (err) return res.status(500).json({ message: "Error" })
        res.status(201).json({ message: "Successfully" })
    })
}

const changeUser = (req, res) => {
    const { nick, name, surname, email } = req.body

    updateUser(({ nick, name, surname, email }, (err, result) => {
        if (err) return res.status(500).json({ message: "Error" })
        res.status(201).json({ message: "Successfully" })
    }))
}

export default { getUsersController, registerUser, loginUser, removeUser, changeUser }