const User = require("../models/user");
const jsonFilePath = "./db/data.json";

// Get All Users Info
const getAllUsers = async (req, res) => {
  const allusers = await User.find({});
  res.status(200).send(allusers);
};

// Add New User
const addUser = async (req, res) => {
  const user = req.body;
  const result = await User.create({
    username: user.username,
    email: user.email,
    id: user.id,
  });
  console.log(result);
  return res.status(201).json({ msg: "success" });
};

// Get Single user by Id
const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.find({ id: id });
  return res.send(user);
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ id: id });
    res.send(`User Deleted successfully!`);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update User Info
const updateUserInfo = async (req, res) => {
  try {
    const { id } = req.params;
    await User.updateOne({ id: id }, { $set: req.body });
    res.send("User has been Updated Successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
  deleteUser,
  updateUserInfo,
};
