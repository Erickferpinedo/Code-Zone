const express = require("express");
const router = express.Router();
const {createUser, getUser, getUsers, updateUser, deleteUser} = require('../controllers/user.controller.js');

//post reqeust to create a user
router.post("/", createUser);

//get request from server for a specific user
router.get("/:id", getUser);

// get request from server for all users
router.get("/", getUsers);

// put request to update a specific user information
router.put("/:id", updateUser);

// delete request to delete a specific user
router.delete("/:id", deleteUser);

// Exports to database
module.exports = router;
