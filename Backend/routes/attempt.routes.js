import express from "express";
import { createAttempt, deleteAttempt, getAttempt, getAttempts, updateAttempt } from "../controllers/attempt.controller.js";
const router = express.Router();

router.post( "/", createAttempt);

router.get("/:id", getAttempt);

router.get("/", getAttempts);

router.delete( "/", deleteAttempt);

router.put( "/:id", updateAttempt);

export default router;