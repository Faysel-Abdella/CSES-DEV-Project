require("express-async-errors");

const cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { StatusCodes } = require("http-status-codes");

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// manage CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      //   "https://bag6xc5pd2.us-east-1.awsapprunner.com/",
    ],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", [
    "http://localhost:5173",
    // "https://bag6xc5pd2.us-east-1.awsapprunner.com/",
  ]);
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

const bcrypt = require("bcryptjs");

// #### Test

app.get("/test", (req, res, next) => {
  res.json({ message: "Hello world" });
});

// #### Models
const Admin = require("./models/Admin");

// #### Middlewares

const { authenticateAdmin } = require("./middlewares/authMiddleware");
const { authenticateMember } = require("./middlewares/authMiddleware");

// #### Routes
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const memberRoutes = require("./routes/memberRoutes");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", authenticateAdmin, adminRoutes);
app.use("/api/v1/member", authenticateMember, memberRoutes);

//404 middleware
app.use("*", (req, res, next) => {
  //'*' stands for all routes that do not match the all the above routes
  res.status(StatusCodes.NOT_FOUND).json({ message: "page not found" });
});

//General error handling middleware
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.message || "Something went error(error msg not passed)";
  //   console.log(error);
  res.status(statusCode).json({ message: message });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    return Admin.findOne({ role: "admin" });
  })
  .then(async (admin) => {
    if (!admin) {
      const newAdmin = new Admin({
        email: "fayselAdmi@gmail.com",
        password: await bcrypt.hash("090909", 10),
      });
      return newAdmin.save();
    }
    return admin;
  })
  .then((result) => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("Server running ... :)");
    });
  })
  .catch((err) => {
    console.log("Connecting to MongoDB error", err);
    process.exit(1);
  });
