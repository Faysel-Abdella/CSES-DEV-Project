const express = require("express");

const router = express.Router();

const {
  addMember,
  getAllMembers,
  getOneMember,
  deleteMember,
} = require("../controllers/adminController");
const { validateAddingMember } = require("../middlewares/validationMiddleware");

router.post("/member/add", validateAddingMember, addMember);

router.get("/members/all", getAllMembers);

router.get("/member/:memberId", getOneMember);

router.delete("/member/:memberId", deleteMember);

module.exports = router;
