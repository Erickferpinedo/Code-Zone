// Next_Button.js
import React from "react";
import "./next_button.css";
import { createAttempt } from "../../apiServices/attemptService";
import { sendEmail } from "../../apiServices/emailService";

const Next_Button = ({
  selectedFace,
  selectedQuestionType,
  lastAttemptDate,
  nextReminderDate,
  inputQuestionName,
  inputQuestionDescription,
  notes,
  setSelectedFace,
  setSelectedQuestionType,
  setNextReminderDate,
  setLastAttemptDate,
  setQuestionDescription,
  setQuestionName,
  setNotes,
}) => {
  const handleSubmit = async () => {
    try {
      // validate everything is entered
      if (
        selectedQuestionType === "Select Type" ||
        !lastAttemptDate ||
        !selectedFace ||
        !inputQuestionName.trim()
      ) {
        alert("Please fill all required fields!");
        return;
      }
      //map out faces to a difficulty for database
      const faceToDifficultyMap = {
        smile: "easy",
        neutral: "medium",
        sad: "hard",
      };

      // create the map for the attempt data user id will be added on the backend
      const attemptData = {
        difficulty: faceToDifficultyMap[selectedFace],
        questionType: selectedQuestionType,
        lastAttempt: lastAttemptDate.toISOString(),
        nextReminder: nextReminderDate ? nextReminderDate.toISOString() : null,
        questionName: inputQuestionName,
        questionDescription: inputQuestionDescription,
        note: notes,
      };

      const reminderInfo = {
        message: notes,
        subject: inputQuestionName,
        scheduledTime: nextReminderDate,
      }

      //testing
      console.log("Attempt Data:", attemptData);
      console.log("reminder")

      // send the attempt data to the backend
      const response = await createAttempt(attemptData);
      // create a scheduled email
      const email = await sendEmail(reminderInfo);

      //testing
      console.log("Attempt saved:", response);
      console.log("Reminder Scheduled:", email);
      
      alert("Attempt saved successfully!");

      //clear fields
      setSelectedFace(null);
      setSelectedQuestionType("Select Type");
      setLastAttemptDate(null);
      setNextReminderDate(null);
      setQuestionDescription("");
      setQuestionName("");
      setNotes("")
    } catch (error) {
      // differentiate the errors for debugging
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
        alert(`Failed to save attempt: ${error.response.data.message}`);
      } else {
        console.error("Error saving attempt:", error);
        alert("Failed to save attempt.");
      }
    }
  };

  const handleCancel = () => {
    setSelectedFace(null);
    setSelectedQuestionType("Select Type");
    setLastAttemptDate(null);
    setNextReminderDate(null);
    setQuestionDescription("");
    setQuestionName("");
    setNotes("");
  };

  return (
    <div className="button-container">
      <button onClick={handleSubmit} className="next_button">
        Save
      </button>
      <button onClick={handleCancel} className="delete_button">
        Cancel
      </button>
    </div>
  );
};

export default Next_Button;
