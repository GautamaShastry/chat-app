import express from "express";  
import { getUsers } from "../controllers/users.js";
import verifyLogin from "../middleware/verifyLogin.js";

const router = express.Router();

router.get("/", verifyLogin, getUsers); // only logged in users can access this route   

export default router;