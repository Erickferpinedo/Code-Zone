import express from "express";
import {
  createAttempt,
  deleteAttempt,
  getAttempt,
  getAttempts,
  updateAttempt,
} from "../controllers/attempt.controller.js";
import { isAuthenticated } from "../config/session.js";
const router = express.Router();

//only authenticated users can make these requests
router.use(isAuthenticated);

router.post("/", createAttempt);

router.get("/all", getAttempts);

router.get("/:qName", getAttempt);

router.delete("/:qName", deleteAttempt);

router.put("/:qName", updateAttempt); // change this note

export default router;
