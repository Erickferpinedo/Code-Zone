import agenda from "../email/emailAgenda.js";
import User from "../models/model.user.js";

export const sendEmailToUser = async (req, res) => {
  const { message, scheduledTime } = req.body;
  const { id } = req.user;

  // Validate input
  if (!id || !message) {
    return res
      .status(400)
      .json({ error: "Please provide both user ID and message." });
  }

  try {
    // Fetch the user from the database
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    await agenda.schedule(new Date(scheduledTime), "send-email", {
      email: user.email,
      subject: "Scheduled Email Reminder",
      message: message,
    });

    res.status(200).json({ message: "Email has been scheduled successfully!" });
  } catch (error) {
    console.error("Error in sendEmailToUser:", error);
    res.status(500).json({ error: "Failed to schedule email." });
  }
};
