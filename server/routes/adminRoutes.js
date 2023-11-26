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
  addOpportunity,
  getAllOpportunities,
  updateOpportunity,
  deleteOpportunity,
} = require("../controllers/adminController");
const {
  validateAddingMember,
  validateAddingEvent,
  validateAddingOpportunity,
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

// ### Admin-to-opportunity
router.post("/opportunity/add", validateAddingOpportunity, addOpportunity);

router.get("/opportunities/all", getAllOpportunities);

router.put(
  "/opportunity/:opportunityId",
  validateAddingOpportunity,
  updateOpportunity
);

router.delete("/opportunity/:opportunityId", deleteOpportunity);

module.exports = router;
