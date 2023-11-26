import mongoose from "mongoose";

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
  },
  { timestamps: true }
);

export default mongoose.model("Opportunity", OpportunitySchema);
