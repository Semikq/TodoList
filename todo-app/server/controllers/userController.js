import getUsers from "../models/todoModel.js"

export const getUsersController = (req, res) => {
     getUsers((users) =>{
    console.log(users)
    res.json(`${users}` + "DASD")
})}