const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/config.env" });
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
const generalRoutes = require("./routes/generalRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api", generalRoutes);
app.use("/auth", authRoutes);
app.use(errorMiddleware);

module.exports = app;
