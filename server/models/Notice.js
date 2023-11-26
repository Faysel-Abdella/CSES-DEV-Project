const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noticeSchema = new Schema(
  {
    title: {
      type: String,
    },

    description: {
      type: String,
    },

    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notice", noticeSchema);
