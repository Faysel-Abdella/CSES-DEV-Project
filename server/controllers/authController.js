const User = require("../models/User");
const Admin = require("../models/Admin");

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.email;

  const isAdmin = await Admin.findOne({ email: email });

  if (isAdmin) {
  }
};
