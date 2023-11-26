const jwt = require("jsonwebtoken");

exports.createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

exports.verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
