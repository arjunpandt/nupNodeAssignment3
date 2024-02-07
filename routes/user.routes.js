const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  addUser,
  getUserById,
  deleteUser,
  updateUserInfo,
} = require("../controllers/user.controller");

// AL routes
router.get("/users", getAllUsers);

router.post("/adduser", addUser);

router.get("/user/:id", getUserById);

router.delete("/deleteuser/:id", deleteUser);

router.put("/updateuser/:id", updateUserInfo);

module.exports = router;
