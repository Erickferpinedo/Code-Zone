import express from "express";
import { createAttempt, deleteAttempt, getAttempt, getAttempts, updateAttempt } from "../controllers/attempt.controller.js";
import { isAuthenticated } from "../config/session.js";
const router = express.Router();

router.use(isAuthenticated);

router.post( "/", createAttempt);

router.get("/:id", getAttempt);

router.get("/all", getAttempts);

router.delete( "/:id", deleteAttempt);

router.put( "/:id", updateAttempt);

export default router;