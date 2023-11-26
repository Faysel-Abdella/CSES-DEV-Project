const mongoose = require("mongoose");

const OpportunitySchema = new mongoose.Schema(
  {
    company: {
      type: String,
    },
    position: {
      type: String,
    },

    jobType: {
      type: String,
      enum: ["Internship", "Part-time", "Full-time"],
    },

    jobLocation: {
      type: String,
    },

    contact: {
      type: String,
    },

    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Opportunity", OpportunitySchema);
