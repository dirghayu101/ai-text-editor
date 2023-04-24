const express = require("express");
const { testController } = require("../controllers/generalController");
const router = express.Router();

router.route("/test").get(testController);

module.exports = router;
