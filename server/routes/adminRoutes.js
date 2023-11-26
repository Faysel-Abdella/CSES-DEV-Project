const express = require("express");

const router = express.Router();

const {
  addMember,
  getAllMembers,
  getOneMember,
  deleteMember,
  addEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
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

router.get("/events/all", getAllEvents);

router.put("/event/:eventId", validateAddingEvent, updateEvent);

router.delete("/event/:eventId", deleteEvent);

module.exports = router;
