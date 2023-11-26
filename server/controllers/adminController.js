const { StatusCodes } = require("http-status-codes");

const bcrypt = require("bcryptjs");

const Member = require("../models/Member");
const Admin = require("../models/Admin");
const Event = require("../models/Event");

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
  const member = await Member.findByIdAndDelete({ _id: memberId });

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
  const events = await Event.find();

  if (!events) {
    return res
      .status(StatusCodes.OK)
      .json({ message: "No event is registered" });
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "All events obtained successfully", events: events });
};
