const { StatusCodes } = require("http-status-codes");

const bcrypt = require("bcryptjs");

const Member = require("../models/Member");
const Admin = require("../models/Admin");

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
