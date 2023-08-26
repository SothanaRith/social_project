import express from "express";
import { getUser, updateUser,getUsers,getAllUsers } from "../controllers/user.js";

const router = express.Router()

router.get("/", getUsers)
router.get("/all", getAllUsers)
router.get ("/find/:userId",getUser)
router.put ("/",updateUser)


export default router