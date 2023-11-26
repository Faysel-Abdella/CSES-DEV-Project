const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
  },

  password: {
    type: String,
  },

  role: {
    type: String,
    default: "admin",
  },
});

module.exports = mongoose.model("Admin", adminSchema);
