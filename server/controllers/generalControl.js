const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

module.exports.testController = catchAsyncError((req, res, next) => {
  res.status(200).json({
    success: true,
    message: "We have received your request at the test route.",
  });
});
