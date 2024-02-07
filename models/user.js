const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/knoldus"
const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    id: { type: String },
}, { timestamps: true });

mongoose
    .connect(url)
    .then(() => console.log("db connected"))
    .catch((err) => console.log("Mogog Error", err));
module.exports = mongoose.model("users", userSchema);
