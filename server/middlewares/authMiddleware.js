const { StatusCodes } = require("http-status-codes");

const { verifyJWT } = require("../utils/tokenUtil");

exports.authenticateAdmin = async (req, res, next) => {
  const token = req.cookies.devToken;

  if (!token) {
    const error = new Error("Authentication fails, no token");
    error.statusCode = StatusCodes.UNAUTHORIZED;
    throw error;
  }

  try {
    const admin = verifyJWT(token);
    const adminId = admin.userId;
    const role = admin.role;
    console.log(admin);

    if (role !== "admin") {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Non-authorized admin, invalid role" });
    }

    req.adminId = adminId;
    req.role = role;
    next();
  } catch (err) {
    const error = new Error("Authentication fails for admin");
    error.statusCode = StatusCodes.UNAUTHORIZED;
    throw error;
  }
};

exports.authenticateMember = async (req, res, next) => {
  const token = req.cookies.devToken;

  if (!token) {
    const error = new Error("Authentication fails, no token");
    error.statusCode = StatusCodes.UNAUTHORIZED;
    throw error;
  }

  try {
    const member = verifyJWT(token);
    const memberId = member.memberId;
    const role = member.role;

    req.memberId = memberId;
    req.role = role;
    next();
  } catch (err) {
    const error = new Error("Authentication fails for member");
    error.statusCode = StatusCodes.UNAUTHORIZED;
    throw error;
  }
};
