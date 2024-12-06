import express from "express";
import {
  createNotification,
  getNotification,
  getNotifications,
  updateNotification,
  deleteNotification,
} from "../controllers/controller.notification.js";

const router = express.Router();

router.post("/", createNotification); // Create a new notification
router.get("/:id", getNotification); // Get a single notification by ID
router.get("/", getNotifications); // Get all notifications
router.put("/:id", updateNotification); // Update a notification by ID
router.delete("/:id", deleteNotification); // Delete a notification by ID

export default router;
