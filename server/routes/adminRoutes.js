const express = require("express");

const router = express.Router();

const { addMember, getAllMembers } = require("../controllers/adminController");
const { validateAddingMember } = require("../middlewares/validationMiddleware");

router.post("/user/add", validateAddingMember, addMember);

router.get("/users/all", getAllMembers);

// router.get("/user/:userId", getOneMember);

// router.delete("/user/:userId", deleteMember);

module.exports = router;
