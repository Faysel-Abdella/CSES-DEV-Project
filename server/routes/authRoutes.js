const express = require("express");

const router = express.Router();

const { login, getCurrentPerson } = require("../controllers/authController");
const { validateLogin } = require("../middlewares/validationMiddleware");

router.post("/login", validateLogin, login);

router.get("/get-current-person", getCurrentPerson);

module.exports = router;
