import mongoose from "mongoose";

const AttemptsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // user id from mongodb
    ref: "User",
    required: true,
  },

  questionName: {
    type: String,
    required: true,
    unique: true,
  },

  questionDescription: {
    type: String,
  },

  questionType: {
    type: String, // identifier for problem
    required: true,
  },

  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },

  note: {
    type: String, // note from user
    default: "",
  },

  lastAttempt: {
    type: Date,
    required: true,
  },

  nextReminder: {
    type: Date,
  },
});

// model creation for attempts
export default mongoose.model("Attempts", AttemptsSchema);
