require("express-async-errors");

const cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const { StatusCodes } = require("http-status-codes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();
app.use(express.json());

app.get("/test", (req, res, next) => {
  res.json({ message: "Hello world" });
});

// #### Routes
const adminRoutes = require("./routes/adminRoutes");

app.use("api/v1/auth", authRoutes);
app.use("/api/v1/admin", checkIfAdmin, adminRoutes);

//404 middleware
app.use("*", (req, res, next) => {
  //'*' stands for all routes that do not match the all the above routes
  res.status(StatusCodes.NOT_FOUND).json({ message: "page not found" });
});

//General error handling middleware
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || "Something went error(error msg not passed)";
  res.status(statusCode).json({ message: message });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("Server running ... :)");
    });
  })
  .catch((err) => {
    console.log("Connecting to MongoDB error", err);
    process.exit(1);
  });
