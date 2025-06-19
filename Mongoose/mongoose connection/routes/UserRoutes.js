const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user.controller");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
