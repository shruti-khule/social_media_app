import express from "express";
import { getUser } from "../controllers/users.js";

const router = express.Router()

router.get("/find/:user_id", getUser)
router.get("/find/:user_id", updateUser)

export default router