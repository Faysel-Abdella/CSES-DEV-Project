const { StatusCodes } = require("http-status-codes");

const bcrypt = require("bcryptjs");

const { createJWT, verifyJWT } = require("../utils/tokenUtil");

const Member = require("../models/Member");
const Admin = require("../models/Admin");
const { response } = require("express");

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const isAdmin = await Admin.findOne({ email: email });

  const isMember = await Member.findOne({ email: email });

  if (!isAdmin & !isMember) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Incorrect email" });
  }

  if (isAdmin) {
    const isMatch = await bcrypt.compare(password, isAdmin.password);
    console.log(password);
    if (!isMatch) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Incorrect password" });
    }

    const token = createJWT({ userId: isAdmin._id, role: "admin" });

    res.cookie("devToken", token, {
      httpOnly: false,
      sameSite: "None",
      path: "/",
      secure: true,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "Admin successfully logged in", isAdmin: true });
  } else if (isMember) {
    const isMatch = await bcrypt.compare(password, isMember.password);
    if (!isMatch) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Incorrect password" });
    }

    const token = createJWT({ memberId: isMember._id, role: "member" });

    res.cookie("devToken", token, {
      httpOnly: false,
      sameSite: "None",
      secure: true,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "Member successfully logged in", isAdmin: false });
  }
};

exports.getCurrentPerson = async (req, res) => {
  const personInfo = req.cookies.devToken;

  const token = req.cookies.devToken;

  if (!token) {
    const error = new Error("Authentication fails, no token");
    error.statusCode = StatusCodes.UNAUTHORIZED;
    throw error;
  }

  try {
    const person = verifyJWT(token);
    const role = person.role;

    res.status(StatusCodes.OK).json({ role, person });
  } catch (err) {
    console.log(err);
  }
};
