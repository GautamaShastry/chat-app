import express from "express";
import verifyLogin from "../middleware/verifyLogin.js";

import { sendMessage, getMessages } from "../controllers/messages.js";

const router = express.Router();

router.get("/:id", verifyLogin, getMessages);
router.post("/send/:id", verifyLogin, sendMessage);

export default router;