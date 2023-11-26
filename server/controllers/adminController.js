const { StatusCodes } = require("http-status-codes");

const bcrypt = require("bcryptjs");

const Member = require("../models/Member");
const Admin = require("../models/Admin");
const Event = require("../models/Event");
const Opportunity = require("../models/Opportunity");
const Notice = require("../models/Notice");

exports.addMember = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const year = req.body.year;

  const hashedPassword = await bcrypt.hash(password, 10);

  //The validation of checking if a member is found with the same email is in the validationMiddleware

  const newMember = new Member({
    name,
    email,
    password: hashedPassword,
    year,
  });

  await newMember.save();
  res
    .status(StatusCodes.CREATED)
    .json({ message: "Member added successfully" });
};

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

exports.deleteMember = async (req, res) => {
  const memberId = req.params.memberId;
  const member = await Member.findByIdAndDelete(memberId);

  if (!member) {
    return res
      .status(StatusCodes.OK)
      .json({ message: "No member is registered" });
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "Member removed from the club successfully" });
};

// ###########################   Admin-to-Events ##################################### //

exports.addEvent = async (req, res) => {
  const newEvent = new Event(req.body);

  await newEvent.save();
  res.status(StatusCodes.CREATED).json({ message: "Event added successfully" });
};

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

exports.updateEvent = async (req, res) => {
  const eventId = req.params.eventId;
  const updatedEvents = await Event.findByIdAndUpdate(eventId, req.body, {
    new: true,
  });

  if (!updatedEvents) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "No event is found" });
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "Event updated successfully", updatedEvents });
};

exports.deleteEvent = async (req, res) => {
  const eventId = req.params.eventId;
  const event = await Event.findByIdAndDelete(eventId);

  if (!event) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "No event is found" });
  }

  res.status(StatusCodes.OK).json({ message: "Event deleted successfully" });
};

// ###########################   Admin-to-Opportunities ##################################### //

exports.addOpportunity = async (req, res) => {
  const newOpportunity = new Opportunity(req.body);

  await newOpportunity.save();
  res
    .status(StatusCodes.CREATED)
    .json({ message: "Opportunity added successfully" });
};

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

exports.updateOpportunity = async (req, res) => {
  const opportunityId = req.params.opportunityId;
  const updatedOpportunity = await Opportunity.findByIdAndUpdate(
    opportunityId,
    req.body,
    {
      new: true,
    }
  );

  if (!updatedOpportunity) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "No opportunity is found" });
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "Opportunity updated successfully", updatedOpportunity });
};

exports.deleteOpportunity = async (req, res) => {
  const opportunityId = req.params.opportunityId;
  const opportunity = await Opportunity.findByIdAndDelete(opportunityId);

  if (!opportunity) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "No opportunity is found" });
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "Opportunity deleted successfully" });
};

// ###########################   Admin-to-Notice ##################################### //

exports.addNotice = async (req, res) => {
  const newNotice = new Notice(req.body);

  await newNotice.save();
  res
    .status(StatusCodes.CREATED)
    .json({ message: "Notice added successfully" });
};

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

exports.updateNotice = async (req, res) => {
  const noticeId = req.params.noticeId;
  const updatedNotice = await Notice.findByIdAndUpdate(noticeId, req.body, {
    new: true,
  });

  if (!updatedNotice) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "No notice is found" });
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "Notice updated successfully", updatedNotice });
};

exports.deleteNotice = async (req, res) => {
  const noticeId = req.params.noticeId;
  const notice = await Notice.findByIdAndDelete(noticeId);

  if (!notice) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "No notice is found" });
  }

  res.status(StatusCodes.OK).json({ message: "notice deleted successfully" });
};
