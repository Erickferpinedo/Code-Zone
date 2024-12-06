import express from "express";
import { isAuthenticated } from "../config/session.js";
import { sendEmailToUser, getEmails } from "../controllers/email.controller.js"

const router = express.Router();
router.use(isAuthenticated);

router.post("/send-email", sendEmailToUser);

router.get("/all-emails", getEmails);

export default router;
