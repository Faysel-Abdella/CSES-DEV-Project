const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },

  password: {
    type: String,
  },

  phone: {
    type: Number,
  },

  year: {
    type: String,
  },

  joinOn: {
    type: Date,
  },

  role: {
    type: String,
    default: "member",
  },
});

module.exports = mongoose.model("Member", memberSchema);
