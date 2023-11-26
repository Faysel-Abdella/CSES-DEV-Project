const { StatusCodes } = require("http-status-codes");

const bcrypt = require("bcryptjs");

const Member = require("../models/Member");
const Event = require("../models/Event");
const Opportunity = require("../models/Opportunity");
const Notice = require("../models/Notice");

exports.getAllMembers = async (req, res) => {
  const members = await Member.find();

  if (!members) {
    return res
      .status(StatusCodes.OK)
      .json({ message: "No member is registered" });
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "All members obtained successfully", members: members });
};

exports.getOneMember = async (req, res) => {
  const memberId = req.params.memberId;
  const member = await Member.find({ _id: memberId });

  if (!member) {
    return res
      .status(StatusCodes.OK)
      .json({ message: "No member is registered" });
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "Members obtained successfully", member: member });
};

// ###########################   Member-to-Events ##################################### //
exports.getAllEvents = async (req, res) => {
  const events = await Event.find().sort({ timestamp: -1 });

  if (!events) {
    return res
      .status(StatusCodes.OK)
      .json({ message: "No event is registered" });
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "All events obtained successfully", events: events });
};

// ###########################   Member-to-Opportunities ##################################### //
exports.getAllOpportunities = async (req, res) => {
  const opportunities = await Opportunity.find().sort({ timestamp: -1 });

  if (!opportunities) {
    return res
      .status(StatusCodes.OK)
      .json({ message: "No opportunities is registered" });
  }

  res.status(StatusCodes.OK).json({
    message: "All opportunities obtained successfully",
    opportunities: opportunities,
  });
};

// ###########################   Member-to-Notice ##################################### //
exports.getAllNotices = async (req, res) => {
  const notices = await Notice.find().sort({ timestamp: -1 });

  if (!notices) {
    return res
      .status(StatusCodes.OK)
      .json({ message: "No notices is registered" });
  }

  res.status(StatusCodes.OK).json({
    message: "All notices obtained successfully",
    notices: notices,
  });
};
