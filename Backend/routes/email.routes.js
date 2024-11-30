import express from "express";
import { isAuthenticated } from "../config/session.js";
import { sendEmailToUser } from "../controllers/email.controller.js"

const router = express.Router();
router.use(isAuthenticated);

router.get("/send-email", sendEmailToUser);

export default router;
