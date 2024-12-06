import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the user who owns the notification
      ref: "User",
      required: true,
    },
    attemptId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the related attempt
      ref: "Attempts",
      required: true,
    },
    date: {
      type: Date, // When the notification is sent
      default: Date.now,
    },
    isSent: {
      type: Boolean, // Indicates whether the notification was sent
      default: false,
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt`
  }
);

export default mongoose.model("Notification", NotificationSchema);
