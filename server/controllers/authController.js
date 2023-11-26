const { StatusCodes } = require("http-status-codes");

const bcrypt = require("bcryptjs");

const { createJWT } = require("../utils/tokenUtil");

const Member = require("../models/Member");
const Admin = require("../models/Admin");

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.email;

  const isAdmin = await Admin.findOne({ email: email });

  const isMember = await Member.findOne({ email: email });

  if (!isAdmin || !isMember) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Incorrect email" });
  }

  if (isAdmin) {
    const isMatch = await bcrypt.compare(password, isAdmin.password);
    if (!isMatch) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Incorrect password" });
    }

    const token = createJWT({ userId: isAdmin._id, role: "admin" });

    res.cookie("devToken", token, {
      httpOnly: false,
      sameSite: "None",
      secure: true,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "Admin successfully logged in" });
  } else if (isMember) {
    const isMatch = await bcrypt.compare(password, isMember.password);
    if (!isMatch) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Incorrect password" });
    }

    const token = createJWT({ userId: isMember._id, role: "member" });

    res.cookie("devToken", token, {
      httpOnly: false,
      sameSite: "None",
      secure: true,
    });

    return res
      .status(StatusCodes.OK)
      .json({ message: "Member successfully logged in" });
  }
};
