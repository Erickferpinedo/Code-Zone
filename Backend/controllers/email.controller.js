import User from "../models/model.user.js";
import agenda from "../email/emailAgenda.js";

// subject is the question name
// message is notes
// time is reminder time
export const sendEmailToUser = async (req, res) => {
  const { message, subject, scheduledTime } = req.body;
  // Validate input
  if (!message) {
    return res.status(400).json({ error: "Please provide message." });
  }
  try {
    await agenda.schedule(new Date(scheduledTime), "send-email", {
      email: req.user.email,
      subject: subject,
      message: message,
    });

    res.status(200).json({ message: "Email has been scheduled successfully!" });
  } catch (error) {
    console.error("Error in sendEmailToUser:", error);
    res.status(500).json({ error: "Failed to schedule email." });
  }
};

export const getEmails = async (req, res) => {
  try {
    const reminders = await agenda.jobs({ "data.email": req.user.email });
    res.status(200).json(reminders);
  } catch (error) {
    console.error("Error retrieving user scheduled emails:", error);
    res.status(500).json({ error: "Failed getting emails" });
  }
};
