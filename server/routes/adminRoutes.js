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
  addNotice,
  getAllNotices,
  updateNotice,
  deleteNotice,
  getOneEvent,
} = require("../controllers/adminController");
const {
  validateAddingMember,
  validateAddingEvent,
  validateAddingOpportunity,
  validateAddingNotice,
} = require("../middlewares/validationMiddleware");

// ### Admin-to-member
router.post("/member/add", validateAddingMember, addMember);

router.get("/members/all", getAllMembers);

router.get("/member/:memberId", getOneMember);

router.delete("/member/:memberId", deleteMember);

// ### Admin-to-event
router.post("/event/add", validateAddingEvent, addEvent);

router.get("/events/all", getAllEvents);

router.get("/event/:eventId", getOneEvent);

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

// ### Admin-to-notice
router.post("/notice/add", validateAddingNotice, addNotice);

router.get("/notices/all", getAllNotices);

router.put("/notice/:noticeId", validateAddingNotice, updateNotice);

router.delete("/notice/:noticeId", deleteNotice);

module.exports = router;
