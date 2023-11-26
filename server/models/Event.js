const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
  },

  subTitle: {
    type: String,
  },

  description: {
    type: String,
  },

  imageURL: {
    type: String,
  },

  place: {
    type: String,
  },

  date: {
    type: String,
  },

  time: {
    type: String,
  },

  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Event", eventSchema);
