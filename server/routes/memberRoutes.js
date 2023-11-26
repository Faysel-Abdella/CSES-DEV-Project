const express = require("express");

const router = express.Router();

const {
  getAllMembers,
  getOneMember,
  getAllEvents,
  getAllOpportunities,
  getAllNotices,
} = require("../controllers/memberController");

// ### Member-to-member
router.get("/members/all", getAllMembers);

router.get("/member/:memberId", getOneMember);

// ### Member-to-event
router.get("/events/all", getAllEvents);

// ### Member-to-opportunity

router.get("/opportunities/all", getAllOpportunities);

// ### Member-to-notice

router.get("/notices/all", getAllNotices);

module.exports = router;
