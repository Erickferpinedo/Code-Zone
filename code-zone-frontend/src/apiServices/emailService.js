import { api } from "./api";

// parameter is the {email: , subject: , message: , } object
export const sendEmail = async (mail) => {
  try {
    const response = api.post("/email/send-email", mail);
    console.log(response);
    return response;
  } catch (error) {
    console.error("There was an error sending this email:", error);
    throw error;
  }
};

// gets all emails and returns in [{}, {}, ...] format
export const getEmails = async () => {
  try {
    const response = await api.get("/email/all-emails");
    console.log("All reminders received:", await response.data);
    return await response.data;
  } catch (error) {
    console.error("There was an error getting their reminders:", error);
    throw error;
  }
};
