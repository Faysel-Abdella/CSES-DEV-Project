const express = require("express");

const router = express.Router();

const { addMember } = require("../controllers/adminController");

router.post("/user/add", addMember);

module.exports = router;
