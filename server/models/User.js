const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
});

module.exports = mongoose.model("User", userSchema);
