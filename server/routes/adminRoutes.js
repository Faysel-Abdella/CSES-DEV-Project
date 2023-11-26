const express = require("express");

const router = express.Router();

router.post("/user/add", verifyJWT, checkUser);

module.exports = router;
