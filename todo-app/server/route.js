import express from "express";
import { getUsersController, registerUser, loginUser, removeUser, changeUser } from "./controllers/userController.js";

const router = express.Router()

router.get("/users", getUsersController);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/remove", removeUser);
router.post("/change", changeUser);

export default router