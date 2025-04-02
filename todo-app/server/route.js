import express from "express";
import { getUsersController } from "./controllers/userController.js";

const router = express.Router()

router.get("/", getUsersController)

export default router