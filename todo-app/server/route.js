import express from "express";
import { getUsersController, registerUser, loginUser, removeUser, changeUser } from "./controllers/userController.js";
import { getTasksController, getTasksDayController, getTasksAddController, getTasksRemoveController, getTasksChangeController } from "./controllers/tasksController.js"

const router = express.Router()

router.get("/users", getUsersController)
router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/remove", removeUser)
router.post("/change", changeUser)

router.get("/tasks", getTasksController)
router.post("/tasksDate", getTasksDayController)
router.post("/tasksAdd", getTasksAddController)
router.post("/tasksRemove", getTasksRemoveController)
router.post("/tasksChange", getTasksChangeController)

export default router