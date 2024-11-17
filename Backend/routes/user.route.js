import express from "express";
const router = express.Router();
import { createUser, getUser, getUsers, updateUser, deleteUser } from '../controllers/user.controller.js';

// Post request to create a user
router.post("/", createUser);

// Get request from server for a specific user
router.get("/", getUser);

// Get request from server for all users
router.get("/all", getUsers);

// Put request to update a specific user information
router.put("/:id", updateUser);

// Delete request to delete a specific user
router.delete("/:id", deleteUser);


// Export the router as default
export default router;
