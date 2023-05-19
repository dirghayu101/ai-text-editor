const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");

module.exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { username, email, password } = req.body;
  const user = await User.create({ username, email, password });
  res.status(201).json({
    success: true,
    user,
  });
});
