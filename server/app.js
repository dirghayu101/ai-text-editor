const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
const generalRoutes = require("./routes/generalRoutes");

app.use("/api", generalRoutes);
app.use(errorMiddleware);

module.exports = app;
