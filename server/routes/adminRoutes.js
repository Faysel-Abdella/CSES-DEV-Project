const express = require("express");

const router = express.Router();

const {
  addMember,
  getAllMembers,
  getOneMember,
  deleteMember,
  addEvent,
} = require("../controllers/adminController");
const {
  validateAddingMember,
  validateAddingEvent,
} = require("../middlewares/validationMiddleware");

// ### Admin-to-member
router.post("/member/add", validateAddingMember, addMember);

router.get("/members/all", getAllMembers);

router.get("/member/:memberId", getOneMember);

router.delete("/member/:memberId", deleteMember);

// ### Admin-to-event
router.post("/event/add", validateAddingEvent, addEvent);

// router.get("/event/all", getAllEvents);

// router.put("/event/:eventId", updateEvent);

// router.delete("/event/:eventId", deleteMEvent);

module.exports = router;
