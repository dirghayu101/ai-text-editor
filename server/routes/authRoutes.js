const express = require("express");
const { registerUser } = require("../controllers/authControls");
const router = express.Router();

router.route("/login").post(registerUser);

module.exports = router;
