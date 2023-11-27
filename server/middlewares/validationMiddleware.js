const { body, validationResult } = require("express-validator");

const { StatusCodes } = require("http-status-codes");
const Member = require("../models/Member");

const withValidatorErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      const errorArray = errors.array();
      if (!errors.isEmpty()) {
        const errorMessages = errorArray.map((error) => error.msg);
        const error = new Error(errorMessages);
        error.statusCode = StatusCodes.BAD_REQUEST;
        if (errorMessages[0].startsWith("no student")) {
          error.statusCode = StatusCodes.NOT_FOUND;
        }
        throw error;
      }
      next();
    },
  ];
};

exports.validateLogin = withValidatorErrors([
  body("email").notEmpty().isEmail().withMessage("a valid email is required"),

  body("password").notEmpty().withMessage("password is required"),
]);

exports.validateAddingMember = withValidatorErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    //check if there is a member with the same email
    .custom(async (value) => {
      const member = await Member.findOne({ email: value });
      if (member) {
        throw new Error("email already exist");
      }
    }),

  body("password").notEmpty().withMessage("password is required"),

  body("name").notEmpty().withMessage("name is required"),

  body("year").notEmpty().withMessage("year is required"),
]);

exports.validateAddingEvent = withValidatorErrors([
  body("title").notEmpty().withMessage("title is required"),

  body("subTitle").notEmpty().withMessage("subTitle is required"),

  body("eventType").notEmpty().withMessage("eventType is required"),

  body("description").notEmpty().withMessage("description is required"),

  body("place").notEmpty().withMessage("place is required"),

  body("date").notEmpty().withMessage("date is required"),

  body("time").notEmpty().withMessage("time is required"),
]);

exports.validateAddingOpportunity = withValidatorErrors([
  body("company").notEmpty().withMessage("company is required"),

  body("position").notEmpty().withMessage("position is required"),

  body("jobType").notEmpty().withMessage("jobType is required"),

  body("jobLocation").notEmpty().withMessage("jobLocation is required"),

  body("contact").notEmpty().withMessage("contact is required"),
]);

exports.validateAddingNotice = withValidatorErrors([
  body("title").notEmpty().withMessage("title is required"),

  body("description").notEmpty().withMessage("description is required"),
]);
