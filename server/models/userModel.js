//NOTE: GOAL I want as much modularization as possible and least coupling.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // userID will be generated (default)
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
  // If set true, user will be able to access locked notes (his own).
  accessLockedNotes: {
    type: Boolean,
    default: false,
  },
  // Password to access locked notes.
  accessPin: {
    type: String,
    select: false,
  },
  // The note object.
  // Category name as key and its content as value.
  entryObject: {
    type: Mixed,
    select: false,
  },
  // If set true, the user should not be allowed to access their account.
  blockAccount: {
    type: Boolean,
    default: true, //turn true, when the account gets verified.
  },
  // If this is false, block account should be true.
  emailVerify: {
    type: Boolean,
    default: false,
  },
  //
  deleteTime: {
    type: Date,
  },
});

module.exports = mongoose.model("User", userSchema);
