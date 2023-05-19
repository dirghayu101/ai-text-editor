//NOTE: GOAL I want as much modularization as possible and least coupling.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    maxLength: [15, "Username cannot exceed 15 characters."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password."],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
