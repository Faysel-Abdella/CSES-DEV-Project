const express = require("express");

const router = express.Router();

const { addMember } = require("../controllers/adminController");
const { validateAddingMember } = require("../middlewares/validationMiddleware");

router.post("/user/add", validateAddingMember, addMember);

module.exports = router;
