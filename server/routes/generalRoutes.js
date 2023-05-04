const express = require("express");
const { testController } = require("../controllers/generalControl");
const router = express.Router();

router.route("/test").get(testController);

module.exports = router;
