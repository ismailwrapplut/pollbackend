import mongoose from "mongoose";

const savePollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  pollid: { type: String, unique: true, required: true },
  options: [
    {
      id: { type: String, unique: true },
      options: { type: String },
      count: { type: Number, default: 0 },
    },
  ],
  creator: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const savePoll = mongoose.model("savePoll", savePollSchema);
export default savePoll;
